import classes from "./TabletBtn.module.css";
import Navigation from "../reusable/Navigation";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../planetContext/PlanetContext";

function MobileBtn() {
  const { PlanetId } = useParams();

  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);

  return (
    <Navigation
      background={planet.border}
      btn={classes.btn}
      list={classes.list}
      overview=" 01 OVERVIEW"
      structure=" 02 INTERNAL STRUCTURE"
      surface="03 SURFACE GEOLOGY"
    />
  );
}
export default MobileBtn;
