import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContex } from "../Context/AuthProvider";
import { FaAnglesDown } from "react-icons/fa6";
import { RiAdminFill, RiCloseLargeFill, RiMenuUnfold2Fill } from "react-icons/ri";
import { toast } from "react-toastify";


const NavBar = () => {
    const {user, LogOutUser ,loading} = useContext(AuthContex)
    const [condition, setConditon] = useState(false);
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true)
    
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
           <div className="flex md:hidden">
             {
                !menu?<button onClick={()=>setMenu(!menu)} className="text-3xl "><RiMenuUnfold2Fill /></button>:
                     <button onClick={()=>setMenu(!menu)} className="text-3xl "><RiCloseLargeFill /></button>
             }
             
           </div>
           <div className={`md:flex ${menu?'flex':"hidden"}`}>
            <ul onClick={()=>setMenu(!menu)} className="md:flex absolute left-0 top-20 md:top-0 md:left-0
             bg-slate-200 md:bg-white p-12  md:p-4 md:relative gap-10 font-semibold 
             justify-center items-center rounded-xl md:rounded-none text-2xl z-10 md:text-base

             ">
                <NavLink to='/'><li className="my-2">Home</li></NavLink>
                <NavLink to='/about'><li className="my-2">About</li></NavLink>
                <NavLink to='/login'><li className="my-2">Login</li></NavLink>
                <NavLink to='/deshboard'><li className="my-2">Dashboard</li></NavLink>
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



