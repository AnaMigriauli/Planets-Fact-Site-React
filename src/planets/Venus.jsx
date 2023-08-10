import { useParams } from "react-router-dom";
import venus from "../assets/images/venus-1.svg";
import venusStr from "../assets/images/venus-2.svg";
import venusSurf from "../assets/images/venus-3.svg";
import classes from "../planets/Venus.module.css";
import Planet from "../common/Planet";

const venusParameters = [
  { label: "ROTATION TIME", value: "58.6 DAYS" },
  { label: "REVOLUTION TIME", value: "87.97 DAYS" },
  { label: "RADIUS", value: "2,439.7 KM" },
  { label: "AVERAGE TEMP", value: "430°C" },
];

export function Venus({ menu }) {
  const selectedPlanet = menu.find((planet) => planet.name === planetId);
  console.log(menu);
  const { planetId } = useParams();
  // if (planetId === "venus") {
  return (
    <Planet
      menu={menu}
      classname={classes.venus}
      name="VENUS"
      imgSrc={venus}
      overview={
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
      }
      mercuryParam={venusParameters}
    />
  );
  // }
  // return null;
}
export function VenusStructure() {
  const { planetId } = useParams();

  if (planetId === "venus") {
    return (
      <Planet
        name="VENUS"
        imgSrc={venus}
        src={venusStr}
        className={classes["internal-structure"]}
        classname={classes.venus}
        overview={
          "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
        }
        mercuryParam={venusParameters}
      />
    );
  }
}

export function VenusSurface() {
  const { planetId } = useParams();

  if (planetId === "venus") {
    return (
      <Planet
        name="Venus"
        imgSrc={venus}
        src={venusSurf}
        className={classes.suface}
        classname={classes.venus}
        overview={
          "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
        }
        mercuryParam={venusParameters}
      />
    );
  }
}
