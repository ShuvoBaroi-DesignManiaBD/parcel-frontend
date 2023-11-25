import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

const MobileNavigation = () => {
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive }) => (isActive ? "text font-medium text-primary" : "text font-medium");
    return (
        <ul className="flex flex-col justify-center items-center gap-8 py-16 z-50">
            {user ? <div className="flex flex-col justify-center items-center gap-4">
                <img
                    src={user?.photoURL}
                    alt="avatar"
                    className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"
                />
                <p className="text-lg text-headingColor font-medium">{user?.displayName}</p>

            </div> : ''}
            <NavLink to="/" className={activeStatus}>
                Home
            </NavLink>
            
            {user ?
                <>
                    <NavLink to="/login" className="primaryBtn text text-white font-medium p-2 px-4 flex items-center gap-3" onClick={logout}>
                        Logout <FiLogOut></FiLogOut>
                    </NavLink>
                </>
                : <div className="flex gap-5">
                    <NavLink to="/login" className="secondaryBtn text text-headingColor py-2">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="primaryBtn text text-white py-2">
                        Register
                    </NavLink>
                </div>}
        </ul>
    );
};

export default MobileNavigation;