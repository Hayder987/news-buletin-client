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
import AdminPannel from "../pages/AdminPannel";
import UserPrivate from "../private/UserPrivate";
import AllUser from "../pages/AllUser";
import AdminAllPost from "../pages/AdminAllPost";
import AdminAllComment from "../pages/AdminAllComment";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:"/deshboard",
                element: <UserPrivate><Dashboard></Dashboard></UserPrivate>
            },
            {
                path:'/news/:id',
                element: <EditPost></EditPost>,
                loader:({params})=> fetch(`https://news-buletin-server.vercel.app/posts/${params.id}`)

            },
            
            {
                path:"/posts/:id",
                element:<UserPrivate><PostDetails></PostDetails></UserPrivate>,
                loader:({params})=> fetch(`https://news-buletin-server.vercel.app/posts/${params.id}`)
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/admin',
                element: <AdminPannel></AdminPannel>,
                children:[
                    {
                        path:'/admin/addpost',
                        element :<PostHandle></PostHandle>
                    },
                    {
                        path:'/admin/users',
                        element :<AllUser></AllUser>,
                    },
                    {
                        path:'/admin/allpost',
                        element :<AdminAllPost></AdminAllPost>,
                    },
                    {
                        path:'/admin/allcomment',
                        element :<AdminAllComment></AdminAllComment>,
                    },
                ]
            }
        ]
    }
])