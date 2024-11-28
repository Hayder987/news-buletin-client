import { createBrowserRouter } from "react-router";
import Mainlayout from "../main/Mainlayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:"/deshboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])