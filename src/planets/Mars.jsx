import mars from "../assets/images/mars-1.svg";
import marsStr from "../assets/images/mars-2.svg";
import marsSurf from "../assets/images/mars-3.svg";
import classes from "../planets/mars.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import PlanetContext from "../planetContext/PlanetContext";
import { useContext } from "react";
import { NavigationContext } from "../planetContext/NavigationContext";

export function Mars() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);
  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.mars;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = marsStr;
    className = classes["internal-structure"];
    classname = classes.mars;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = marsSurf;
    className = classes.surface;
    classname = classes.mars;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }

  return (
    <>
      <Planet
        classname={classname}
        className={className}
        name="MARS"
        imgSrc={mars}
        overview={overview}
        parameters={planet.marsParameters}
        src={src}
        wikipedia={wikipedia}
      />
    </>
  );
}
