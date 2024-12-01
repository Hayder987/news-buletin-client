import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContex } from "../Context/AuthProvider";
import { FaAnglesDown } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { toast } from "react-toastify";


const NavBar = () => {
    const {user, LogOutUser ,loading} = useContext(AuthContex)
    const [condition, setConditon] = useState(false);
    const navigate = useNavigate()
    
    const signOutHandler =()=>{
        LogOutUser()
        setConditon(false)
        toast.info('SignOut SuccessFull!')
        navigate('/login')
    }
    
    return (
        <div className="flex justify-between items-center relative py-3">
           <div className="">
             <h1 className="text-4xl font-bold">Buletin</h1>
           </div>
           <div className="hidden lg:flex">
            <ul className="flex gap-10 font-semibold justify-center items-center">
                <NavLink to='/'><li className="">Home</li></NavLink>
                <NavLink to='/about'><li className="">About</li></NavLink>
                <NavLink to='/login'><li className="">Login</li></NavLink>
                <NavLink to='/deshboard'><li className="">Dashboard</li></NavLink>
                {
                    user?.email ==='admin@gmail.com' && 
                    <NavLink to='/admin'><li className="text-xl"><RiAdminFill /></li></NavLink>
                }
            </ul>
           </div>
           {
            user?
            <div onClick={()=>setConditon(!condition)} className="flex justify-center items-center gap-3 border rounded-xl py-2 px-4">
              <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full border p-1" />
              <span className=""><FaAnglesDown /></span>
            </div>:
            <div className="">
            {
                loading?'':
                <Link to='/login'><button className="btn btn-primary ">login</button></Link>
            }
           </div>
           }
           <div className={`
           absolute ${condition?'flex ':"hidden"} z-50 duration-1000 top-24 right-0  
           bg-slate-100 rounded-xl p-6 md:p-12
            `}>
             <div className="">
                <div className="flex justify-center items-center">
                    <img src={user?.photoURL} alt="" className="w-20 h-20" />
                </div>
                <h1 className="text-3xl font-semibold text-center my-6">hello! {user?.displayName}</h1>
                <p className="text-current font-medium mb-8 text-gray-600 text-center">Email: {user?.email}</p>
                <div className="divider"></div>
                <div className="">
                   <button onClick={signOutHandler} className="btn btn-primary w-full">LogOut</button>
                </div>
             </div>
           </div>
        </div>
    );
};

export default NavBar;



