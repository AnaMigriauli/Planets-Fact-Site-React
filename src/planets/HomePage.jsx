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
      <div className={classes["orbit-08"]}>
        <div className={classes["orbit-07"]}>
          <div className={classes["orbit-06"]}>
            <div className={classes["orbit-05"]}>
              <div className={classes["orbit-04"]}>
                <div className={classes["orbit-03"]}>
                  <div className={classes["orbit-02"]}>
                    <img className={classes.venus} src={venus} />
                    <div className={classes["orbit-01"]}>
                      <img className={classes.mercury} src={mercury} />
                    </div>
                  </div>
                  <img className={classes.earth} src={earth} />
                </div>
                <img className={classes.mars} src={mars} />
              </div>
              <img className={classes.jupiter} src={jupiter} />
            </div>
            <img className={classes.saturn} src={saturn} />
          </div>
          <img className={classes.uranus} src={uranus} />
        </div>
        <img className={classes.neptune} src={neptune} />
      </div>
    </div>
  );
};

export default HomePage;
