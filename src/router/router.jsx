import { createBrowserRouter } from "react-router";
import Mainlayout from "../main/Mainlayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import PostHandle from "../pages/PostHandle";
import PostDetails from "../pages/PostDetails";
import EditPost from "../pages/EditPost";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";


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
                element: <EditPost></EditPost>,
                loader:({params})=> fetch(`http://localhost:4000/posts/${params.id}`)

            },
            {
                path:'/news',
                element :<PostHandle></PostHandle>
            },
            {
                path:"/posts/:id",
                element:<PostDetails></PostDetails>,
                loader:({params})=> fetch(`http://localhost:4000/posts/${params.id}`)
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])