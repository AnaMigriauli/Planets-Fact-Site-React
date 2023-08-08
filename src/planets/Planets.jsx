import MainNavigation from "../components/MainMenu";
import { Outlet } from "react-router-dom";
import classes from "../planets/Planets.module.css";

function Planets() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Planets;
