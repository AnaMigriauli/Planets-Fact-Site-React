import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navigation from "./navigation/Navigation";
import { Mercury } from "./planets/Mercury";
import "./App.css";
import { MercuryStructure } from "./planets/Mercury";
import RootPage from "./planets/Root";
import { MercurySurface } from "./planets/Mercury";
import { Venus, VenusStructure } from "./planets/Venus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        path: "overview:id",
        element: <Mercury />,
      },
      {
        path: "structure:id",
        element: <MercuryStructure />,
      },

      {
        path: "surface:id",
        element: <MercurySurface />,
      },
      {
        path: "overview:id",
        element: <Venus />,
      },
      {
        path: "structure",
        element: <VenusStructure />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
