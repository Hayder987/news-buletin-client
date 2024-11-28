import { createBrowserRouter } from "react-router";
import Mainlayout from "../main/Mainlayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import PostHandle from "../pages/PostHandle";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:4000/posts')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:"/deshboard",
                element: <Dashboard></Dashboard>
            },
            {
                path:'/news/:id',
                element :<PostHandle></PostHandle>
            }
        ]
    }
])