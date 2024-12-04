import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner";
import MainTemplate from "../MainTemplate/MainTemplate";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainTemplate></MainTemplate>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default Router;