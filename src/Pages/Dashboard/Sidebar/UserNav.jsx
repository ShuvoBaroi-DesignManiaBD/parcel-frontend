import { AiOutlineDashboard } from "react-icons/ai";
import SideNavLink from "./SideNavLink";
import { BsBoxSeam, BsBoxes } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { makeDeliveryMen } from "../../../APIs/adminActions";
import { useAuth } from "../../../Hooks/useAuth";

const UserNav = ({refetch}) => {
    const {user} = useAuth()
    const handleAction = async () => {
        makeDeliveryMen(user.email);
        refetch();
    }
    return (
        <div className="">
                    <SideNavLink Icon={BsBoxes} url="my-parcels" text="My Parcels"></SideNavLink>
                    <SideNavLink Icon={BsBoxSeam} url="book-parcel" text="Book a parcel" className="mt-3 mb-6"></SideNavLink>
                    <NavLink className='primaryButtonSm text-sm font-semibold' onClick={handleAction}>Be a deliveryman</NavLink>
                </div>
    );
};

export default UserNav;