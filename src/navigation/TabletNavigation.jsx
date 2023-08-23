import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import { NavLink } from "react-router-dom";
import classes from "./TabletNavigation.module.css";
import { useParams } from "react-router-dom";

function TabletNavigation() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);

  return (
    <header className={classes["tablet-header"]}>
      <div className={classes.title}>
        <h1>THE PLANETS</h1>
      </div>

      <ul className={classes["tablet-navigation"]}>
        {menu.map((planet) => (
          <li
            key={planet.id}
            className={classes["list-item"]}
            style={
              planet.id === PlanetId && window.innerWidth >= 1440
                ? {
                    borderTop: `4px solid var(${planet.border})`,
                  }
                : {}
            }
          >
            <NavLink
              to={`${planet.id}`}
              className={({ isActive }) =>
                isActive ? classes["planets-active"] : classes.planets
              }
            >
              {planet.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default TabletNavigation;
