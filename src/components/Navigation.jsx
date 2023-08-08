import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={classes.navigation}>
      <ul className={classes["nav-list"]}>
        <li>
          <NavLink
            to="/overview"
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
            to="/structure"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            STRUCTURE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/surface"
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
