import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation";

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
