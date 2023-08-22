import venus from "../assets/images/venus-1.svg";
import venusStr from "../assets/images/venus-2.svg";
import venusSurf from "../assets/images/venus-3.svg";
import classes from "../planets/Venus.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import PlanetContext from "../planetContext/PlanetContext";
import { useContext } from "react";
import { NavigationContext } from "../planetContext/NavigationContext";

export function Venus() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);
  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.venus;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = venusStr;
    className = classes["internal-structure"];
    classname = classes.venus;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = venusSurf;
    className = classes.surface;
    classname = classes.venus;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }
  return (
    <Planet
      classname={classname}
      className={className}
      name="VENUS"
      src={src}
      imgSrc={venus}
      overview={overview}
      wikipedia={wikipedia}
      parameters={planet.venusParameters}
    />
  );
}
