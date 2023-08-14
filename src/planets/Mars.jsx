import mars from "../assets/images/mars-1.svg";
import marsStr from "../assets/images/mars-2.svg";
import marsSurf from "../assets/images/mars-3.svg";
import classes from "../planets/mars.module.css";
import Planet from "../common/Planet";

const marsParameters = [
  { label: "ROTATION TIME", value: "1.03  DAYS" },
  { label: "REVOLUTION TIME", value: "1.88 YEARS" },
  { label: "RADIUS", value: "3,389.5  KM" },
  { label: "AVERAGE TEMP", value: "−28°C" },
];

export function Mars() {
  return (
    <Planet
      classname={classes.mars}
      name="MARS"
      imgSrc={mars}
      overview={
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet "
      }
      parameters={marsParameters}
    />
  );
}
export function MarsStructure() {
  return (
    <Planet
      name="MARS"
      imgSrc={mars}
      src={marsStr}
      className={classes["internal-structure"]}
      classname={classes.mars}
      overview={
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
      }
      parameters={marsParameters}
    />
  );
}

export function MarsSurface() {
  return (
    <Planet
      name="MARS"
      imgSrc={mars}
      src={marsSurf}
      className={classes.surface}
      classname={classes.mars}
      overview={
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
      }
      parameters={marsParameters}
    />
  );
}
