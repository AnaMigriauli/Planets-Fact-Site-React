import saturn from "../assets/images/saturn-1.svg";
import saturnStr from "../assets/images/saturn-2.svg";
import saturnSurf from "../assets/images/saturn-3.svg";
import classes from "../planets/Saturn.module.css";
import Planet from "../common/Planet";

const saturnParameters = [
  { label: "ROTATION TIME", value: "10.8 HOURS" },
  { label: "REVOLUTION TIME", value: "29.46 YEARS" },
  { label: "RADIUS", value: "58,232   KM" },
  { label: "AVERAGE TEMP", value: "-138°C" },
];

export function Saturn() {
  return (
    <Planet
      classname={classes.saturn}
      name="SATURN"
      imgSrc={saturn}
      overview={
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth. "
      }
      parameters={saturnParameters}
    />
  );
}
export function SaturnStructure() {
  return (
    <Planet
      name="SATURN"
      imgSrc={saturn}
      src={saturnStr}
      className={classes["internal-structure"]}
      classname={classes.saturn}
      overview={
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
      }
      parameters={saturnParameters}
    />
  );
}

export function SaturnSurface() {
  return (
    <Planet
      name="SATURN"
      imgSrc={saturn}
      src={saturnSurf}
      className={classes.surface}
      classname={classes.saturn}
      overview={
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. "
      }
      parameters={saturnParameters}
    />
  );
}
