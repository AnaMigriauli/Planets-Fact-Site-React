import uranus from "../assets/images/Uranus-1.svg";
import uranusStr from "../assets/images/Uranus-2.svg";
import uranusSurf from "../assets/images/Uranus-3.svg";
import classes from "../planets/Uranus.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import PlanetContext from "../context/PlanetDataContext";

export function Uranus() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);
  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.uranus;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = uranusStr;
    className = classes["internal-structure"];
    classname = classes.uranus;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = uranusSurf;
    className = classes.surface;
    classname = classes.uranus;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }
  return (
    <Planet
      classname={classname}
      className={className}
      src={src}
      name="URANUS"
      imgSrc={uranus}
      overview={overview}
      wikipedia={wikipedia}
      parameters={planet.uranusParameters}
    />
  );
}
