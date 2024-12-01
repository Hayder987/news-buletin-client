import { useContext } from "react";
import { AuthContex } from "../Context/AuthProvider";
import { NavLink, Outlet } from "react-router";


const AdminPannel = () => {
    const {user} = useContext(AuthContex)
    return (
        
        <div className="bg-gray-100 min-h-[90vh] p-4 md:p-6">
            <h1 className="text-center font-bold text-4xl">Admin Dashboard</h1>
            <div className=" p-4 md:p-12 flex gap-6 flex-col md:flex-row">
            
            {/* side Bar */}
           <div className="md:w-2/12 p-6 bg-white rounded-2xl">
             <div className="">
                <p className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{user?.displayName}</span>
                    <img src={user?.photoURL} alt="" className="w-14 h-14 rounded-full" />
                </p>
             </div>
             <div className="divider"></div>
             <div className="">
                <ul className="flex flex-col gap-4">
                    <NavLink to='/admin/addpost'><li className="p-3 rounded-xl border text-xl font-semibold">Add Post</li></NavLink>
                    <NavLink to='/admin/users'><li className="p-3 rounded-xl border text-xl font-semibold">All Users</li></NavLink>
                    <NavLink to='/admin/allpost'><li className="p-3 rounded-xl border text-xl font-semibold">All Posts</li></NavLink>
                    <NavLink to='/admin/allcomment'><li className="p-3 rounded-xl border text-xl font-semibold">All Comments</li></NavLink>
                </ul>
             </div>
           </div> 
           {/* display */}
           <div className="md:w-10/12 p-12 bg-white rounded-2xl">
             <Outlet></Outlet>
           </div>
        </div>
        </div>
    );
};

export default AdminPannel;




