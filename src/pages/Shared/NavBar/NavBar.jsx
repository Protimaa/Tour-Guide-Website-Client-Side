import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdFavoriteBorder } from "react-icons/md";
import useBook from "../../../hooks/useBook";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../assets/logo.jpeg"

// import logo from '../../../assets/logo2.JPG'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [book] = useBook();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
        <li><Link to="/">Home</Link></li>


        <li><Link to="/community">Community</Link></li>
        {/* <li><Link to="/blogs">Blogs</Link></li> */}
        {/* <li><Link to="/aboutUs"> About Us</Link></li> */}
        <li><Link to="contactUs"> Contact Us</Link></li>

        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }

        <li>
            <Link to="/dashboard/book">
                <button className="btn btn-xs">
                    <MdFavoriteBorder className="mr-2 bg-red-700 text-red-400 rounded-lg"></MdFavoriteBorder>
                    <div className="badge  badge-secondary">+  {book.length}</div>
                </button>
            </Link>
        </li>

        <li tabIndex={0}>
            <details>
                <summary>More Page</summary>
                <ul className="p-2 bg-red-400 w-40">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/order/adventure">Booked Service</Link></li>
                </ul>
            </details>
        </li>
        {
            user ? <>
                {/* <li><Link>{user?.displayName}</Link></li> */}
                <li><><button onClick={handleLogOut} className=" btn-ghost">LogOut</button></></li>
            </> : <>
                <li><Link to="/login" >Login</Link></li>
            </>
        }

    </>
    return (
        <div>
            <div className=" navbar  fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-red-400">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="h-16 w-16 rounded-full" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email}
                </div>
            </div>



        </div>
    );
};

export default NavBar;