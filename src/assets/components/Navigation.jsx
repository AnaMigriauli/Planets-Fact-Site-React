import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
function MainNavigation() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const OpenMenuHandler = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
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
            <li>
              <NavLink>mercury</NavLink>
            </li>
            <li>
              <NavLink>venus</NavLink>
            </li>
            <li>
              <NavLink>earth</NavLink>
            </li>
            <li>
              <NavLink>mars</NavLink>
            </li>
            <li>
              <NavLink>jupiter</NavLink>
            </li>
            <li>
              <NavLink>saturn</NavLink>
            </li>
            <li>
              <NavLink>uranus</NavLink>
            </li>
            <li>
              <NavLink>neptune</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
}

export default MainNavigation;
