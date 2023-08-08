import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Planets from "./planets/Root";
import Navigation from "./navigation/Navigation";
import Mercury from "./planets/Mercury";
import "./App.css";
import MercuryStructure from "./planets/MercuryStructure";
import RootPage from "./planets/Root";
import MercurySurface from "./planets/MercurySurface";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        path: "/overview",
        element: <Mercury />,
      },
      {
        path: "/nav:id",
        element: <Navigation />,
      },
      {
        path: "/structure",
        element: <MercuryStructure />,
      },

      {
        path: "/surface",
        element: <MercurySurface />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
