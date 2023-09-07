import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import earth from "../assets/images/earth-1.svg";
import jupiter from "../assets/images/jupiter-1.svg";
import mars from "../assets/images/mars-1.svg";
import mercury from "../assets/images/mercury-1.svg";
import neptune from "../assets/images/Neptune-1.svg";
import saturn from "../assets/images/saturn-1.svg";
import uranus from "../assets/images/Uranus-1.svg";
import venus from "../assets/images/venus-1.svg";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes["main-page"]}>
      <NavLink to={"neptune"}>
        <div className={classes["orbit-08"]}>
          <NavLink to={"uranus"}>
            <div className={classes["orbit-07"]}>
              <NavLink to={"saturn"}>
                <div className={classes["orbit-06"]}>
                  <NavLink to={"jupiter"}>
                    <div className={classes["orbit-05"]}>
                      <NavLink to={"mars"}>
                        <div className={classes["orbit-04"]}>
                          <NavLink to={"earth"}>
                            <div className={classes["orbit-03"]}>
                              <NavLink to={"venus"}>
                                <div className={classes["orbit-02"]}>
                                  <NavLink to={"mercury"}>
                                    <div className={classes["orbit-01"]}>
                                      <img
                                        className={classes.mercury}
                                        src={mercury}
                                      />
                                    </div>
                                  </NavLink>
                                  <img className={classes.venus} src={venus} />
                                </div>
                              </NavLink>
                              <img className={classes.earth} src={earth} />
                            </div>
                          </NavLink>
                          <img className={classes.mars} src={mars} />
                        </div>
                      </NavLink>
                      <img className={classes.jupiter} src={jupiter} />
                    </div>
                  </NavLink>
                  <img className={classes.saturn} src={saturn} />
                </div>
              </NavLink>
              <img className={classes.uranus} src={uranus} />
            </div>
          </NavLink>
          <img className={classes.neptune} src={neptune} />
        </div>
      </NavLink>
    </div>
  );
};

export default HomePage;
