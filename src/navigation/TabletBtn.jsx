import classes from "./TabletBtn.module.css";
import Navigation from "../reusable/Navigation";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";

function MobileBtn() {
  const { PlanetId } = useParams();

  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);

  return (
    <Navigation
      background={planet.border}
      btn={classes.btn}
      list={classes.list}
      overview=" OVERVIEW"
      structure=" INTERNAL STRUCTURE"
      surface=" SURFACE GEOLOGY"
      numberOne="01"
      numberTwo="02"
      numberthree="03"
      number={classes.number}
    />
  );
}
export default MobileBtn;
