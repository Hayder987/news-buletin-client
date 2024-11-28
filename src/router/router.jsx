import { createBrowserRouter } from "react-router";
import Mainlayout from "../main/Mainlayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])