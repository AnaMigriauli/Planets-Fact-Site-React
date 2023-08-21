import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootPage from "./planets/Root";
import PlanetContext from "./planetContext/PlanetContext";
import {
  PlanetsPath,
  // PlanetsStrucutePath,
  // PlanetsSurfacePath,
} from "./planets/PlanetsPath";
import { NavigationProvider } from "./planetContext/NavigationContext";
import Anuki from "./planets/anuki";
const MENU = [
  { id: "mercury", name: "mercury", color: " --water", border: "--blue-moon" },
  { id: "venus", name: "venus", color: " --yellow", border: "--venus-border" },
  { id: "earth", name: "earth", color: " --blue", border: "--earth-border" },
  { id: "mars", name: "mars", color: "--Radical-Red", border: "--mars-border" },
  {
    id: "jupiter",
    name: "jupiter",
    color: "  --Rusty-Sand",
    border: "--jupiter-border",
  },
  {
    id: "saturn",
    name: "saturn",
    color: " --Orange-Yellow",
    border: "--saturn-border",
  },
  {
    id: "uranus",
    name: "uranus",
    color: " --Turquoise",
    border: " --uranus-border",
  },
  {
    id: "neptune",
    name: "neptune",
    color: " --Blueberry",
    border: "--neptune-border",
  },
];

const router = createBrowserRouter([
  {
    path: "/Planets-Fact-Site-React",
    element: <RootPage />,
    children: [
      // { path: ":PlanetId", element: <PlanetsPath /> },
      { path: ":PlanetId", element: <Anuki /> },
    ],
  },
]);
function App() {
  return (
    <PlanetContext.Provider value={MENU}>
      <NavigationProvider>
        <RouterProvider router={router} />;
      </NavigationProvider>
    </PlanetContext.Provider>
  );
}

export default App;
