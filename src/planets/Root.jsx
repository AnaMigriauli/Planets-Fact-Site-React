import MainNavigation from "../navigation/MobileNavigation";
import { Outlet } from "react-router-dom";
// import classes from "../planets/Root.module.css";

function RootPage() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
export default RootPage;
