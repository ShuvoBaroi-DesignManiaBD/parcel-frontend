import { BsBoxSeam, BsBoxes } from "react-icons/bs";
import SideNavLink from "./SideNavLink";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineFeedback } from "react-icons/md";

const DeliveryManNav = () => {
    return (
        <>
            <SideNavLink Icon={BsBoxes} url="my-parcels" text="My Parcels"></SideNavLink>
            <SideNavLink Icon={BsBoxSeam} url="book-parcel" text="Book a parcel"></SideNavLink>
            <SideNavLink Icon={HiOutlineClipboardList} url="delivery-list" text="My delivery list"></SideNavLink>
            <SideNavLink Icon={MdOutlineFeedback} url="my-reviews" text="My Reviews"></SideNavLink>
        </>
    );
};

export default DeliveryManNav