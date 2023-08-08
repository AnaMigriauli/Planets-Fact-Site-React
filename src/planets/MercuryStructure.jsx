import Planet from "../common/Planet";
import mercuryStr from "../assets/images/mercury-2.svg";
import mercury from "../assets/images/mercury-1.svg";
import classes from "./MercuryStructure.module.css";

const mercuryParameters = [
  { label: "ROTATION TIME", value: "58.6 DAYS" },
  { label: "REVOLUTION TIME", value: "87.97 DAYS" },
  { label: "RADIUS", value: "2,439.7 KM" },
  { label: "AVERAGE TEMP", value: "430°C" },
];

function MercuryStructure() {
  return (
    <Planet
      name="MERCURY"
      imgSrc={mercury}
      src={mercuryStr}
      className={classes["internal-structure"]}
      overview={
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
      }
      mercuryParam={mercuryParameters}
    />
  );
}
export default MercuryStructure;
