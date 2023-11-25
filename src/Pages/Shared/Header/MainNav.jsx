import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserDropdown from "../../../Components/Dropdowns/UserDropdown";


const DesktopNav = () => {
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive, isPending }) => (isActive && "textSm font-semibold text-primary");
    return (
        <ul className="flex textSm p-10 lg:p-0 flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-transparent text-text font-medium">

            <NavLink to="/" className={activeStatus}>
                Home
            </NavLink>
            <NavLink to="/dashboard" className={activeStatus}>
                Dashboard
            </NavLink>
            <IoMdNotificationsOutline size={22}/>
            {user ?
                // <>
                //     <div className="flex items-center gap-4">
                //         <p className="text-lg font-medium">{user?.displayName}</p>
                //         <img
                //             src={user?.photoURL}
                //             alt="avatar"
                //             className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"

                //         />
                //     </div>
                //     <NavLink to="/login" className="primaryBtn text text-text font-medium p-2 px-4 flex items-center gap-3" onClick={logout}>
                //         Logout <FiLogOut></FiLogOut>
                //     </NavLink>
                // </>
                <UserDropdown></UserDropdown>
                : <div className="flex items-center gap-2">
                    <NavLink to="/login" className="primaryButtonSm">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="secondaryButtonSm">
                        Register
                    </NavLink>
                </div>}
        </ul>
    );
};

export default DesktopNav;