import jupiter from "../assets/images/jupiter-1.svg";
import jupiterStr from "../assets/images/jupiter-2.svg";
import jupiterSurf from "../assets/images/jupiter-3.svg";
import classes from "../planets/Jupiter.module.css";
import Planet from "../reusable/Planet";
import { useParams } from "react-router-dom";
import PlanetContext from "../context/PlanetDataContext";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

export function Jupiter() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);
  const { active } = useContext(NavigationContext);
  let classname, className, src, overview, wikipedia;
  if (active === "overview") {
    classname = classes.jupiter;
    overview = planet.content;
    wikipedia = planet.source;
  } else if (active === "structure") {
    src = jupiterStr;
    className = classes["internal-structure"];
    classname = classes.jupiter;
    overview = planet.contentStructure;
    wikipedia = planet.sourceStructure;
  } else if (active === "surface") {
    src = jupiterSurf;
    className = classes.surface;
    classname = classes.jupiter;
    overview = planet.contentSurface;
    wikipedia = planet.sourceSurface;
  }

  return (
    <Planet
      src={src}
      classname={classname}
      className={className}
      name="JUPITER"
      imgSrc={jupiter}
      overview={overview}
      parameters={planet.jupiterParameters}
      wikipedia={wikipedia}
    />
  );
}
// export function JupiterStructure() {
//   return (
//     <Planet
//       name="JUPITER"
//       imgSrc={jupiter}
//       src={jupiterStr}
//       className={classes["internal-structure"]}
//       classname={classes.jupiter}
//       overview={
//         ""
//       }
//       parameters={Planet.jupiterParameters}
//     />
//   );
// }

// export function JupiterSurface() {
//   const { PlanetId } = useParams();
//   const menu = useContext(PlanetContext);
//   const planet = menu.find((planet) => planet.id === PlanetId);
//   return (
//     <Planet
//       name="JUPITER"
//       imgSrc={jupiter}
//       src={jupiterSurf}
//       className={classes.surface}
//       classname={classes.jupiter}
//       overview={
//         ""
//       }
//       parameters={planet.jupiterParameters}
//     />
//   );
// }
