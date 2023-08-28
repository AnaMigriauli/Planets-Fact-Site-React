import mercury from "../assets/images/mercury-1.svg";
import mercuryStr from "../assets/images/mercury-2.svg";
import mercurySurf from "../assets/images/mercury-3.svg";
import classes from "../planets/Mercury.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import { NavigationContext } from "../context/NavigationContext";

export function Mercury() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);

  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.mercury;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = mercuryStr;
    className = classes["internal-structure"];
    classname = classes.mercury;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = mercurySurf;
    className = classes.surface;
    classname = classes.mercury;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }
  return (
    <Planet
      classname={classname}
      className={className}
      src={src}
      name="MERCURY"
      imgSrc={mercury}
      overview={overview}
      wikipedia={wikipedia}
      parameters={planet.mercuryParameters}
    />
  );
}
