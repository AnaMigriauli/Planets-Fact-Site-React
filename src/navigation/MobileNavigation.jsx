import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MobileNavigation.module.css";
import arrow from "../assets/images/Path 3.svg";
import Navigation from "./Navigation";

const MENU = [
  { id: "/mercury", name: "mercury", color: " --water" },
  { id: "/venus", name: "venus", color: " --yellow" },
  { id: "/earth", name: "earth", color: " --blue" },
  { id: "/mars", name: "mars", color: "--Radical-Red" },
  { id: "/jupiter", name: "jupiter", color: "  --Rusty-Sand" },
  { id: "/saturn", name: "saturn", color: " --Orange-Yellow" },
  { id: "/uranus", name: "uranus", color: " --Turquoise" },
  { id: "/neptune", name: "neptune", color: " --Blueberry" },
];

function MainNavigation() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const OpenMenuHandler = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <header>
        <div className={classes.header}>
          <h1>THE PLANETS</h1>
          <button
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
              {MENU.map((planet) => (
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
                    <NavLink to={planet.id} className={classes.planets}>
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
      <Navigation />
    </>
  );
}

export default MainNavigation;
