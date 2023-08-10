import Navigation from "../navigation/Navigation";
import { Outlet } from "react-router-dom";
import classes from "../planets/Root.module.css";

function RootNavigationPage() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootNavigationPage;
