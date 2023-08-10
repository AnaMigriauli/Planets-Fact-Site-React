import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navigation from "./navigation/Navigation";
import { Mercury } from "./planets/Mercury";
import "./App.css";
import { MercuryStructure } from "./planets/Mercury";
import RootPage from "./planets/Root";
import { MercurySurface } from "./planets/Mercury";
import { Venus, VenusStructure, VenusSurface } from "./planets/Venus";
import RootNavigationPage from "./planets/NavigationRoot";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <RootNavigationPage />,
        children: [
          { index: true, path: ":planetId/overview", element: <Mercury /> },
          { path: ":planetId/structure", element: <MercuryStructure /> },
          { path: ":planetId/surface", element: <MercurySurface /> },
          { path: ":planetId/overview", element: <Venus /> },
          { path: ":planetId/structure", element: <VenusStructure /> },
          { path: ":planetId/surface", element: <VenusSurface /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
