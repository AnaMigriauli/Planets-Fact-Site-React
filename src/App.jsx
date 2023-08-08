import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planets from "./planets/Planets";
import Navigation from "./components/Navigation";
import Mercury from "./planets/Mercury";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Planets />,
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
