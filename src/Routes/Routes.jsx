import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services";
import Order from "../pages/Order/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>,
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    },
  ]);

 