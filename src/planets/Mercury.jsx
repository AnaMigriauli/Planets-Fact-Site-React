import mercury from "../assets/images/mercury-1.svg";
import classes from "../planets/Mercury.module.css";

function Mercury() {
  return (
    <>
      <img className={classes.mercury} src={mercury} alt="mercury" />
      <div className={classes["mercury-overview"]}>
        <h4>mercury</h4>
        <p>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Suns planets. Mercury is one of four terrestrial planets in
          the Solar System, and is a rocky body like Earth.
        </p>
      </div>
      <div className={classes["mercury-parameters"]}>
        <div>
          <p>ROTATION TIME</p>
          <span>58.6 DAYS</span>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <span>87.97 DAYS</span>
        </div>
        <div>
          <p>RADIUS</p>
          <span>2,439.7 KM</span>
        </div>
        <div>
          <p>AVERAGE TEMP</p>
          <span>430°C</span>
        </div>
      </div>
    </>
  );
}
export default Mercury;
