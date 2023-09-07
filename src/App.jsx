import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootPage from "./planets/Root";
import PlanetContext from "./context/PlanetDataContext";
import { NavigationProvider } from "./context/NavigationContext";
import { PlanetsPath } from "./planets/PlanetsPath";
import { PLANETS_DATA } from "./planetsData";
import HomePage from "./planets/HomePage";

const router = createBrowserRouter([
  {
    path: "Planets-Fact-Site",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: ":PlanetId", element: <PlanetsPath /> },
    ],
  },
]);
function App() {
  return (
    <PlanetContext.Provider value={PLANETS_DATA}>
      <NavigationProvider>
        <RouterProvider router={router} />;
      </NavigationProvider>
    </PlanetContext.Provider>
  );
}

export default App;
