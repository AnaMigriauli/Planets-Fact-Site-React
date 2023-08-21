import uranus from "../assets/images/Uranus-1.svg";
import uranusStr from "../assets/images/Uranus-2.svg";
import uranusSurf from "../assets/images/Uranus-3.svg";
import classes from "../planets/Uranus.module.css";
import Planet from "../reusable/Planet";

const uranusParameters = [
  { label: "ROTATION TIME", value: "17.2 HOURS" },
  { label: "REVOLUTION TIME", value: "84 YEARS" },
  { label: "RADIUS", value: "25,362 KM" },
  { label: "AVERAGE TEMP", value: "-195°C" },
];

export function Uranus() {
  return (
    <Planet
      classname={classes.uranus}
      name="URANUS"
      imgSrc={uranus}
      overview={
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
      }
      parameters={uranusParameters}
    />
  );
}
export function UranusStructure() {
  return (
    <Planet
      name="URANUS"
      imgSrc={uranus}
      src={uranusStr}
      className={classes["internal-structure"]}
      classname={classes.uranus}
      overview={
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
      }
      parameters={uranusParameters}
    />
  );
}

export function UranusSurface() {
  return (
    <Planet
      name="URANUS"
      imgSrc={uranus}
      src={uranusSurf}
      className={classes.surface}
      classname={classes.uranus}
      overview={
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere. "
      }
      parameters={uranusParameters}
    />
  );
}
