import MainNavigation from "../navigation/MobileNavigation";
import { Outlet } from "react-router-dom";
// import classes from "../planets/Root.module.css";
const MENU = [
  { id: "mercury", name: "mercury", color: " --water" },
  { id: "venus", name: "venus", color: " --yellow" },
  { id: "earth", name: "earth", color: " --blue" },
  { id: "mars", name: "mars", color: "--Radical-Red" },
  { id: "jupiter", name: "jupiter", color: "  --Rusty-Sand" },
  { id: "saturn", name: "saturn", color: " --Orange-Yellow" },
  { id: "uranus", name: "uranus", color: " --Turquoise" },
  { id: "neptune", name: "neptune", color: " --Blueberry" },
];

function RootPage() {
  return (
    <>
      <MainNavigation menu={MENU} />

      <Outlet menu={MENU} />
    </>
  );
}
export default RootPage;
