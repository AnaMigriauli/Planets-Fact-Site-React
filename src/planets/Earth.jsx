import earth from "../assets/images/earth-1.svg";
import earthStr from "../assets/images/earth-2.svg";
import earthSurf from "../assets/images/earth-3.svg";
import classes from "../planets/Earth.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import { NavigationContext } from "../context/NavigationContext";

export function Earth() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);

  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.earth;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = earthStr;
    className = classes["internal-structure"];
    classname = classes.earth;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = earthSurf;
    className = classes.surface;
    classname = classes.earth;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }

  return (
    <Planet
      classname={classname}
      name="EARTH"
      overview={overview}
      imgSrc={earth}
      src={src}
      className={className}
      wikipedia={wikipedia}
      parameters={planet.earthParameters}
    />
  );
}
