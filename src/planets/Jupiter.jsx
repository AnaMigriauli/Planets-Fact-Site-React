import jupiter from "../assets/images/jupiter-1.svg";
import jupiterStr from "../assets/images/jupiter-2.svg";
import jupiterSurf from "../assets/images/jupiter-3.svg";
import classes from "../planets/Jupiter.module.css";
import Planet from "../reusable/Planet";

const jupiterParameters = [
  { label: "ROTATION TIME", value: "9.93 HOURS" },
  { label: "REVOLUTION TIME", value: "11.86 YEARS" },
  { label: "RADIUS", value: "69,911  KM" },
  { label: "AVERAGE TEMP", value: "-108°C" },
];

export function Jupiter() {
  return (
    <Planet
      classname={classes.jupiter}
      name="JUPITER"
      imgSrc={jupiter}
      overview={
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun. "
      }
      parameters={jupiterParameters}
    />
  );
}
export function JupiterStructure() {
  return (
    <Planet
      name="JUPITER"
      imgSrc={jupiter}
      src={jupiterStr}
      className={classes["internal-structure"]}
      classname={classes.jupiter}
      overview={
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
      }
      parameters={jupiterParameters}
    />
  );
}

export function JupiterSurface() {
  return (
    <Planet
      name="JUPITER"
      imgSrc={jupiter}
      src={jupiterSurf}
      className={classes.surface}
      classname={classes.jupiter}
      overview={
        "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
      }
      parameters={jupiterParameters}
    />
  );
}
