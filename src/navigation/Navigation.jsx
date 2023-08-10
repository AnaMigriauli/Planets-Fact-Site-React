import { NavLink, useParams } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  const { planetId } = useParams();
  return (
    <div className={classes.navigation}>
      <ul className={classes["nav-list"]}>
        <li>
          <NavLink
            to={`/${planetId}/overview`}
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
            to={`/${planetId}/structure`}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            STRUCTURE
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${planetId}/surface`}
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
