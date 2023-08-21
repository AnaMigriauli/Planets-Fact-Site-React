import { useState, useContext } from "react";
import PlanetContext from "../planetContext/PlanetContext";
import { NavLink } from "react-router-dom";
import classes from "./MobileNavigation.module.css";
import arrow from "../assets/images/Path 3.svg";
import TabletNavigation from "./TabletNavigation";

function MainNavigation() {
  const menu = useContext(PlanetContext);

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const OpenMenuHandler = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const CloseMenuHandler = () => {
    setIsMenuClicked(false);
  };
  return (
    <>
      {window.innerWidth > 768 ? (
        <TabletNavigation />
      ) : (
        <header className={classes["mobile-header"]}>
          <div className={classes.header}>
            <h1>THE PLANETS</h1>
            <button
              className={classes.button}
              onClick={() => {
                OpenMenuHandler();
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
          {isMenuClicked ? (
            <nav>
              <ul>
                {menu.map((planet) => (
                  <li key={planet.id} className={classes["menu-list"]}>
                    <div className={classes["list-item"]}>
                      <div
                        style={{
                          backgroundColor: `var(${planet.color})`,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <NavLink
                        to={`${planet.id}`}
                        className={classes.planets}
                        onClick={CloseMenuHandler}
                      >
                        {planet.name}
                      </NavLink>
                    </div>
                    <img src={arrow} alt="" />
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            ""
          )}
        </header>
      )}
    </>
  );
}

export default MainNavigation;
