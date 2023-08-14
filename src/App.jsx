import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetContext from "./planetContext/PlanetContext";
// import { Mercury } from "./planets/Mercury";
import "./App.css";
// import { MercuryStructure } from "./planets/Mercury";
import RootPage from "./planets/Root";
// import { MercurySurface } from "./planets/Mercury";
// import { Venus } from "./planets/Venus";
// import { VenusStructure } from "./planets/Venus";
// import { VenusSurface } from "./planets/Venus";
import RootNavigationPage from "./planets/NavigationRoot";
import {
  PlanetsPath,
  PlanetsStrucutePath,
  PlanetsSurfacePath,
} from "./planets/PlanetsPath";

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

const router = createBrowserRouter([
  {
    path: "/Planets-Fact-Site-React",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <RootNavigationPage />,
        children: [
          { index: true, path: "overview/:PlanetId", element: <PlanetsPath /> },
          { path: "structure/:PlanetId", element: <PlanetsStrucutePath /> },
          { path: "surface/:PlanetId", element: <PlanetsSurfacePath /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <PlanetContext.Provider value={MENU}>
      <RouterProvider router={router} />;
    </PlanetContext.Provider>
  );
}

export default App;
