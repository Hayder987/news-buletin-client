import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <div className="container mx-auto p-3">
                <NavBar></NavBar>
                <div className="min-h-[70vh] md:px-12">
                  <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;