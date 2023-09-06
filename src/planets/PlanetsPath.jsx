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

  switch (planet.id) {
    case "mercury":
      return <Mercury />;
    case "venus":
      return <Venus />;
    case "earth":
      return <Earth />;
    case "mars":
      return <Mars />;
    case "jupiter":
      return <Jupiter />;
    case "saturn":
      return <Saturn />;
    case "uranus":
      return <Uranus />;
    case "neptune":
      return <Neptune />;
    default:
      return null;
  }
}
