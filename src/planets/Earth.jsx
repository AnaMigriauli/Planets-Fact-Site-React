import earth from "../assets/images/earth-1.svg";
import earthStr from "../assets/images/earth-2.svg";
import earthSurf from "../assets/images/earth-3.svg";
import classes from "../planets/Earth.module.css";
import Planet from "../common/Planet";

const earthParameters = [
  { label: "ROTATION TIME", value: "0.99 DAYS" },
  { label: "REVOLUTION TIME", value: "365.26 DAYS" },
  { label: "RADIUS", value: "6,371  KM" },
  { label: "AVERAGE TEMP", value: "16°C" },
];

export function Earth() {
  return (
    <Planet
      classname={classes.earth}
      name="EARTH"
      imgSrc={earth}
      overview={
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
      }
      parameters={earthParameters}
    />
  );
}
export function EarthStructure() {
  return (
    <Planet
      name="EARTH"
      imgSrc={earth}
      src={earthStr}
      className={classes["internal-structure"]}
      classname={classes.earth}
      overview={
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
      }
      parameters={earthParameters}
    />
  );
}

export function EarthSurface() {
  return (
    <Planet
      name="EARTH"
      imgSrc={earth}
      src={earthSurf}
      className={classes.surface}
      classname={classes.earth}
      overview={
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
      }
      parameters={earthParameters}
    />
  );
}
