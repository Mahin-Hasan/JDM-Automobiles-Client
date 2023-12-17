import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import DarkModeToggle from "../DarkMode/DarkMode";

const Root = () => {
    return (
        <div>
            <span className="hidden"><DarkModeToggle></DarkModeToggle>
            </span>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;