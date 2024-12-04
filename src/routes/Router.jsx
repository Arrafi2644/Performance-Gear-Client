import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../MainTemplate/MainTemplate";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainTemplate></MainTemplate>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/allSportsEquipment",
          element: <AllEquipment></AllEquipment>
        }
      ]
    },
  ]);

  export default Router;