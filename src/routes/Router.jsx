import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../MainTemplate/MainTemplate";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        }
      ]
    },
  ]);

  export default Router;