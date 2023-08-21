import mercury from "../assets/images/mercury-1.svg";
import mercuryStr from "../assets/images/mercury-2.svg";
import mercurySurf from "../assets/images/mercury-3.svg";
import classes from "../planets/Mercury.module.css";
import Planet from "../reusable/Planet";

const mercuryParameters = [
  { label: "ROTATION TIME", value: "58.6 DAYS" },
  { label: "REVOLUTION TIME", value: "87.97 DAYS" },
  { label: "RADIUS", value: "2,439.7 KM" },
  { label: "AVERAGE TEMP", value: "430°C" },
];

export function Mercury() {
  return (
    <Planet
      classname={classes.mercury}
      name="MERCURY"
      imgSrc={mercury}
      overview={
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortestof all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      }
      parameters={mercuryParameters}
    />
  );
}
export function MercuryStructure() {
  return (
    <Planet
      name="MERCURY"
      imgSrc={mercury}
      src={mercuryStr}
      className={classes["internal-structure"]}
      classname={classes.mercury}
      overview={
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
      }
      parameters={mercuryParameters}
    />
  );
}

export function MercurySurface() {
  return (
    <Planet
      name="MERCURY"
      imgSrc={mercury}
      src={mercurySurf}
      className={classes.surface}
      classname={classes.mercury}
      overview={
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
      }
      parameters={mercuryParameters}
    />
  );
}
