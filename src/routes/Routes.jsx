import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from "../layout/Home";
import Login from './../layout/Login';
import Register from "../layout/Register";
import AllFood from './../layout/AllFood';
import Blog from "../layout/blog";
import FoodDetails from "../layout/FoodDetails";
import AddFood from './../layout/AddFood';
import MyAddedFood from './../layout/MyAddedFood';
import UpdateFood from './../layout/UpdateFood';
import FoodPurchase from './../layout/FoodPurchase';
import MyBookings from './../layout/MyBookings';
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../layout/ErrorPage";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://savory-tavern-server.vercel.app/bookings')
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/allfood",
            element: <AllFood></AllFood>,
        },
        {
            path: "/blog",
            element: <Blog></Blog>,
        },
        {
            path: "/addfood",
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
            path: "/updatefood/:id",
            element: <UpdateFood></UpdateFood>,
            loader: ({params}) => fetch(`https://savory-tavern-server.vercel.app/allfoods/${params.id}`)
        },
        {
            path: "/foodpurchase/:id",
            element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
            loader: ({params}) => fetch(`https://savory-tavern-server.vercel.app/allfoods/${params.id}`)
        },
        {
            path: "/myaddedfood",
            element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
            loader: () => fetch('https://savory-tavern-server.vercel.app/allfoods')
        },
        {
            path: "/allfood/:id",
            element: <FoodDetails></FoodDetails>,
            loader: ({params}) => fetch(`https://savory-tavern-server.vercel.app/allfood/${params.id}`)
        },
        {
            path: "bookings",
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
           
        },
        
        
      ]
    },
  ]);

  export default router;