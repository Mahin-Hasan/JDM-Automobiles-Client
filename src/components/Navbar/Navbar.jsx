import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { IoMdHome, IoMdCart, IoIosLogIn, IoIosLogOut  } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navlinks = <>
        <li className="mr-4 text-lg font-semibold"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-500 border-b-2 border-fuchsia-800" : "text-fuchsia-800"
            }
        ><IoMdHome className="inline text-xl mb-2 me-1" />Home</NavLink></li>
        <li className="mr-4 text-lg font-semibold"><NavLink to='/addproduct'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-500 border-b-2 border-fuchsia-800" : "text-fuchsia-800"
            }
        >Add Product</NavLink></li>
        <li className="mr-4 text-lg font-semibold"><NavLink to='/mycart'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-500 border-b-2 border-fuchsia-800" : "text-fuchsia-800"
            }
        >My Cart<IoMdCart className="inline text-xl mb-2 ms-1" /></NavLink></li>
    </>

    return (
        <nav className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <NavLink to='/'> <div className="flex items-center">
                        <img className="w-[80px]" src={logo} />
                        <h1 className="font-mono"><span className="italic text-red-500 font-extrabold text-xl sm:text-3xl underline">JDM</span> <span className="hidden sm:block text-lime-500 text-base sm:text-xl font-bold italic">Automobiles</span></h1>
                    </div>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center">
                                <img className="w-12 rounded-full mr-1 sm:mr-3 border-2 border-fuchsia-800" src={user.photoURL} alt="login pic" />
                                <p className="mr-0 sm:mr-3 font-mono font-semibold text-sm sm:text-xl text-purple-700">{user.displayName}</p>
                                <Link onClick={handleLogOut} to='/login'><button className="text-pink-700 font-semibold underline hidden sm:inline">Log Out</button>
                                <IoIosLogOut className="inline text-pink-700  text-2xl font-extrabold mb-1 ms-1"/></Link>
                            </div>
                            :
                            <Link to='/login'><button className="text-blue-700 font-semibold underline">Log in<IoIosLogIn className="inline text-xl font-extrabold mb-1 ms-1" />
                            </button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;