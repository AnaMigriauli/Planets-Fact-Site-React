import mercury from "../assets/images/mercury-1.svg";
// import classes from "../planets/Mercury.module.css";
import Planet from "../common/Planet";

const mercuryParameters = [
  { label: "ROTATION TIME", value: "58.6 DAYS" },
  { label: "REVOLUTION TIME", value: "87.97 DAYS" },
  { label: "RADIUS", value: "2,439.7 KM" },
  { label: "AVERAGE TEMP", value: "430°C" },
];

function Mercury() {
  return (
    <Planet
      name="MERCURY"
      imgSrc={mercury}
      overview={
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortestof all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      }
      mercuryParam={mercuryParameters}
    />
  );
}
export default Mercury;
