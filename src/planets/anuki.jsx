import {
  PlanetsPath,
  PlanetsStrucutePath,
  PlanetsSurfacePath,
} from "./PlanetsPath";
import { useContext } from "react";
import { NavigationContext } from "../planetContext/NavigationContext";
function Anuki() {
  const { active } = useContext(NavigationContext);
  console.log(active);
  if (active === "overview") {
    return <PlanetsPath />;
  } else if (active === "structure") {
    return <PlanetsStrucutePath />;
  } else if (active === "surface") {
    return <PlanetsSurfacePath />;
  }
}

export default Anuki;
