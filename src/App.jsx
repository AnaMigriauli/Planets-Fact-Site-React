import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planets from "./assets/planets/Planets";
import Mercury from "./assets/planets/Mercury";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Planets />,
    children: [
      {
        path: "/",
        element: <Mercury />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
