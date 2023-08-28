import neptune from "../assets/images/Neptune-1.svg";
import neptuneStr from "../assets/images/Neptune-2.svg";
import neptuneSurf from "../assets/images/Neptune-3.svg";
import classes from "../planets/Neptune.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import { NavigationContext } from "../context/NavigationContext";

export function Neptune() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);

  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.neptune;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = neptuneStr;
    className = classes["internal-structure"];
    classname = classes.neptune;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = neptuneSurf;
    className = classes.surface;
    classname = classes.neptune;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }
  return (
    <Planet
      classname={classname}
      className={className}
      src={src}
      name="NEPTUNE"
      imgSrc={neptune}
      overview={overview}
      wikipedia={wikipedia}
      parameters={planet.neptuneParameters}
    />
  );
}
