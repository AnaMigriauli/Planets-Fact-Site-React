import saturn from "../assets/images/saturn-1.svg";
import saturnStr from "../assets/images/saturn-2.svg";
import saturnSurf from "../assets/images/saturn-3.svg";
import classes from "../planets/Saturn.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../planetContext/PlanetContext";
import { NavigationContext } from "../planetContext/NavigationContext";

export function Saturn() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);
  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.saturn;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = saturnStr;
    className = classes["internal-structure"];
    classname = classes.saturn;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = saturnSurf;
    className = classes.surface;
    classname = classes.saturn;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }
  return (
    <Planet
      classname={classname}
      className={className}
      name="SATURN"
      src={src}
      imgSrc={saturn}
      overview={overview}
      wikipedia={wikipedia}
      parameters={planet.saturnParameters}
    />
  );
}
