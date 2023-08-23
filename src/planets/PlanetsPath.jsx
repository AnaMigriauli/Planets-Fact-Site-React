import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import { Mercury } from "./Mercury";
import { Venus } from "./Venus";
import { Earth } from "./Earth";
import { Mars } from "./Mars";
import { Jupiter } from "./Jupiter";
import { Saturn } from "./Saturn";
import { Uranus } from "./Uranus";
import { Neptune } from "./Neptune";

export function PlanetsPath() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);

  if (planet.id === "mercury") {
    return <Mercury />;
  } else if (planet.id === "venus") {
    return <Venus />;
  } else if (planet.id === "earth") {
    return <Earth />;
  } else if (planet.id === "mars") {
    return <Mars />;
  } else if (planet.id === "jupiter") {
    return <Jupiter />;
  } else if (planet.id === "saturn") {
    return <Saturn />;
  } else if (planet.id === "uranus") {
    return <Uranus />;
  } else if (planet.id === "neptune") {
    return <Neptune />;
  }
}
