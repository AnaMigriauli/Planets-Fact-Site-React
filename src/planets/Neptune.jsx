import neptune from "../assets/images/Neptune-1.svg";
import neptuneStr from "../assets/images/Neptune-2.svg";
import neptuneSurf from "../assets/images/Neptune-3.svg";
import classes from "../planets/Neptune.module.css";
import Planet from "../reusable/Planet";

const neptuneParameters = [
  { label: "ROTATION TIME", value: "16.08 HOURS" },
  { label: "REVOLUTION TIME", value: "164.79 YEARS" },
  { label: "RADIUS", value: "24,622 KM" },
  { label: "AVERAGE TEMP", value: "-201°C" },
];

export function Neptune() {
  return (
    <Planet
      classname={classes.neptune}
      name="NEPTUNE"
      imgSrc={neptune}
      overview={
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
      }
      parameters={neptuneParameters}
    />
  );
}
export function NeptuneStructure() {
  return (
    <Planet
      name="NEPTUNE"
      imgSrc={neptune}
      src={neptuneStr}
      className={classes["internal-structure"]}
      classname={classes.neptune}
      overview={
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
      }
      parameters={neptuneParameters}
    />
  );
}

export function NeptuneSurface() {
  return (
    <Planet
      name="NEPTUNE"
      imgSrc={neptune}
      src={neptuneSurf}
      className={classes.surface}
      classname={classes.neptune}
      overview={
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
      }
      parameters={neptuneParameters}
    />
  );
}
