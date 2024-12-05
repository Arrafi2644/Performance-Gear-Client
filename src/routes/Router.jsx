import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../MainTemplate/MainTemplate";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddEquipment from "../pages/AddEquipment";
import MyEquipmentList from "../pages/MyEquipmentList";
import PrivateRoute from "./PrivateRoute";

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
          element: <AllEquipment></AllEquipment>,
          loader: ()=>fetch("http://localhost:5000/equipments")
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/addEquipment",
          element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
        },
        {
          path: "/myEquipmentList",
          element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>
        }
      ]
    },
  ]);

  export default Router;