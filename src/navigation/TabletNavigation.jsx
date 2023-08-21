import { useContext } from "react";
import PlanetContext from "../planetContext/PlanetContext";
import { NavLink } from "react-router-dom";
import classes from "./TabletNavigation.module.css";

function TabletNavigation() {
  const menu = useContext(PlanetContext);

  return (
    <header className={classes["tablet-header"]}>
      <div className={classes.title}>
        <h1>THE PLANETS</h1>
      </div>

      <ul className={classes["tablet-navigation"]}>
        {menu.map((planet) => (
          <li key={planet.id} className={classes["list-item"]}>
            <NavLink to={`${planet.id}`} className={classes.planets}>
              {planet.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default TabletNavigation;
