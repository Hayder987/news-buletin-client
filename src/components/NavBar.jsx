import { NavLink } from "react-router";


const NavBar = () => {
    return (
        <div className="flex justify-between items-center py-3">
           <div className="">
             <h1 className="text-4xl font-bold">Buletin</h1>
           </div>
           <div className="">
            <ul className="flex gap-10 font-semibold">
                <NavLink to='/'><li className="">Home</li></NavLink>
                <NavLink to='/about'><li className="">About</li></NavLink>
                <NavLink to='/deshboard'><li className="">Dashboard</li></NavLink>
            </ul>
           </div>
           <div className="">
            <button className="btn btn-primary">Get Started</button>
           </div>
        </div>
    );
};

export default NavBar;