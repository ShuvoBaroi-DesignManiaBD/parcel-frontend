import { AiOutlineDashboard } from "react-icons/ai";
import SideNavLink from "./SideNavLink";
import { BsBoxSeam, BsBoxes } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { makeDeliveryMen } from "../../../APIs/userActions.";
import { useAuth } from "../../../Hooks/useAuth";

const UserNav = () => {
    const {user} = useAuth()
    const handleAction = async () => {
        makeDeliveryMen(user.email)
    }
    return (
        <div className="space-y-2">
                    <SideNavLink Icon={BsBoxes} url="my-parcels" text="My Parcels"></SideNavLink>
                    <SideNavLink Icon={BsBoxSeam} url="book-parcel" text="Book a parcel" className="mb-4"></SideNavLink>
                    <span className="py-5 my-5">
                        <NavLink className='primaryButtonSm text-sm font-semibold' onClick={handleAction}>Be a deliveryman</NavLink>
                    </span>
                </div>
    );
};

export default UserNav;