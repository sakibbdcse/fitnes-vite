import { createBrowserRouter } from "react-router-dom";
import { Layouts } from "../Layouts/Layouts";
import HomePage from "../pages/HomePage/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
export default router;
