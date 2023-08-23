import classes from "./MobileBtn.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanetContext from "../context/PlanetDataContext";
import Navigation from "../reusable/Navigation";

function MobileBtn() {
  const { PlanetId } = useParams();
  const menu = useContext(PlanetContext);
  const planet = menu.find((planet) => planet.id === PlanetId);

  return (
    <Navigation
      navigation={classes.navigation}
      list={classes["nav-list"]}
      btn={classes.btn}
      border={planet.border}
      overview="OVERVIEW"
      structure="STRUCTURE"
      surface="SURFACE"
    />
  );
}
export default MobileBtn;
