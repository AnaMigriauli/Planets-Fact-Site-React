import mercury from "../assets/images/mercury-1.svg";
import Planet from "../common/Planet";
import mercurySurf from "../assets/images/mercury-3.svg";
import classes from "./MercurySurface.module.css";

const mercuryParameters = [
  { label: "ROTATION TIME", value: "58.6 DAYS" },
  { label: "REVOLUTION TIME", value: "87.97 DAYS" },
  { label: "RADIUS", value: "2,439.7 KM" },
  { label: "AVERAGE TEMP", value: "430°C" },
];

function MercurySurface() {
  return (
    <Planet
      name="MERCURY"
      imgSrc={mercury}
      src={mercurySurf}
      className={classes.suface}
      overview={
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
      }
      mercuryParam={mercuryParameters}
    />
  );
}

export default MercurySurface;
