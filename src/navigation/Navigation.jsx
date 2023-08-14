import { NavLink, useParams } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  const { PlanetId } = useParams();
  console.log(PlanetId);
  return (
    <div className={classes.navigation}>
      <ul className={classes["nav-list"]}>
        <li>
          <NavLink
            to={`overview/${PlanetId}`}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            OVERVIEW
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`structure/${PlanetId}`}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            STRUCTURE
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`surface/${PlanetId}`}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SURFACE
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
