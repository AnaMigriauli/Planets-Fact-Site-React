import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../planetContext/PlanetContext";
import { Mercury, MercuryStructure, MercurySurface } from "./Mercury";
import { Venus, VenusStructure, VenusSurface } from "./Venus";
import { Earth, EarthStructure, EarthSurface } from "./Earth";
import { Mars, MarsStructure, MarsSurface } from "./Mars";
import { Jupiter, JupiterStructure, JupiterSurface } from "./Jupiter";
import { Saturn, SaturnStructure, SaturnSurface } from "./Saturn";
import { Uranus, UranusStructure, UranusSurface } from "./Uranus";
import { Neptune, NeptuneStructure, NeptuneSurface } from "./Neptune";

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

export function PlanetsStrucutePath() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);

  const planet = menu.find((planet) => planet.id === PlanetId);

  if (planet.id === "mercury") {
    return <MercuryStructure />;
  } else if (planet.id === "venus") {
    return <VenusStructure />;
  } else if (planet.id === "earth") {
    return <EarthStructure />;
  } else if (planet.id === "mars") {
    return <MarsStructure />;
  } else if (planet.id === "jupiter") {
    return <JupiterStructure />;
  } else if (planet.id === "saturn") {
    return <SaturnStructure />;
  } else if (planet.id === "uranus") {
    return <UranusStructure />;
  } else if (planet.id === "neptune") {
    return <NeptuneStructure />;
  }
}

export function PlanetsSurfacePath() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);

  const planet = menu.find((planet) => planet.id === PlanetId);

  if (planet.id === "mercury") {
    return <MercurySurface />;
  } else if (planet.id === "venus") {
    return <VenusSurface />;
  } else if (planet.id === "earth") {
    return <EarthSurface />;
  } else if (planet.id === "mars") {
    return <MarsSurface />;
  } else if (planet.id === "jupiter") {
    return <JupiterSurface />;
  } else if (planet.id === "saturn") {
    return <SaturnSurface />;
  } else if (planet.id === "uranus") {
    return <UranusSurface />;
  } else if (planet.id === "neptune") {
    return <NeptuneSurface />;
  }
}
