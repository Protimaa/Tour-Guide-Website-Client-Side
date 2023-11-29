import { NavLink, Outlet } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import useBook from "../hooks/useBook";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [book] = useBook();

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-red-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                            <NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/bookings">
                                <FaBook></FaBook>
                                Manage Bookings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/users">
                                <FaUsers></FaUsers>
                                All Users</NavLink>
                        </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/book">
                                        <MdFavoriteBorder></MdFavoriteBorder>
                                        My Service ({book.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>

                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/adventure">
                            <FaSearch></FaSearch>
                            Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;