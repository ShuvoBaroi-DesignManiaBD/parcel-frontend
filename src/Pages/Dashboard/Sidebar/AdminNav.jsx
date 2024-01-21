import { AiOutlineDashboard } from "react-icons/ai";
import SideNavLink from "./SideNavLink";
import { BsBoxes } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const AdminNav = () => {
    return (
        <>
            <SideNavLink Icon={AiOutlineDashboard} url="/dashboard" text="Statistics"></SideNavLink>
                    <SideNavLink Icon={BsBoxes} url="all-parcels" text="All Parcels"></SideNavLink>
                    <SideNavLink Icon={FiUsers} url="users" text="All Users"></SideNavLink>
                    <SideNavLink imageURL="https://i.ibb.co/1K47SWT/delivery-man.webp" url="deliverymen" text="All Delivery Men"></SideNavLink>
        </>
    );
};

export default AdminNav;