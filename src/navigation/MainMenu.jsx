import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainMenu.module.css";
import arrow from "../assets/images/Path 3.svg";
import Navigation from "./Navigation";

const MENU = [
  { id: "01", name: "mercury", color: " --water" },
  { id: "02", name: "venus", color: " --yellow" },
  { id: "03", name: "earth", color: " --blue" },
  { id: "04", name: "mars", color: "--Radical-Red" },
  { id: "05", name: "jupiter", color: "  --Rusty-Sand" },
  { id: "06", name: "saturn", color: " --Orange-Yellow" },
  { id: "07", name: "uranus", color: " --Turquoise" },
  { id: "08", name: "neptune", color: " --Blueberry" },
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
      {!isMenuClicked && <Navigation />}
    </>
  );
}

export default MainNavigation;
