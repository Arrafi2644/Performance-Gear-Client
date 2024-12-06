import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../MainTemplate/MainTemplate";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddEquipment from "../pages/AddEquipment";
import MyEquipmentList from "../pages/MyEquipmentList";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import UpdateEquipment from "../pages/UpdateEquipment";
import SportsCategories from "../components/SportsCategories";
import CategoryProducts from "../components/CategoryProducts";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainTemplate></MainTemplate>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            children: [
              {
                path: "/",
                element: <SportsCategories></SportsCategories>,
                // children: [
                //   {
                //     path: "/myEquipmentList/category/:category",
                //     element: <CategoryProducts></CategoryProducts>,
                //     loader: ({params})=> fetch(`http://localhost:5000/equipments/category/${params.category}`)
                //   }
                // ]
              }
            ]
        },
        {
          path: "/allSportsEquipment",
          element: <AllEquipment></AllEquipment>,
          loader: ()=>fetch("https://performance-gear-server.vercel.app/equipments")
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
          path: "/myEquipmentList/user/:email",
          element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,
          loader: ({params})=>fetch(`https://performance-gear-server.vercel.app/equipments/user/${params.email}`)
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=>fetch(`https://performance-gear-server.vercel.app/equipments/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <UpdateEquipment></UpdateEquipment>,
          loader: ({params}) => fetch(`http://localhost:5000/equipments/${params.id}`)
        }
      ]
    },
  ]);

  export default Router;