
import { FiLogOut } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import SideNavLink from "./SideNavLink";
import { useAuth } from "../../../Hooks/useAuth";
import { useRole } from "../../../Hooks/useRole";
import { useState } from "react";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import DeliveryManNav from "./DeliveryManNav";

const SideNav = () => {
    const [role, setRole] = useState('')
    useRole()
        .then(res => setRole(res))
        .catch(err => console.error(err))

    

    return (
        <div className="h-full flex flex-col items-stretch justify-between space-y-1.5">
            <ul className="space-y-2">
                {/* Admin navingation */}
                {role === 'admin' && <AdminNav></AdminNav>}

                {/* Delivery men navigation */}
                {role === 'deliveryman' && <DeliveryManNav></DeliveryManNav>}

                {/* User navigation */}
                {(role !== 'admin' && role !== 'deliveryman') && 
                <UserNav></UserNav>}
            </ul>



            <div className="border-t py-5">
                <SideNavLink Icon={FiSettings} url="/dashboard/profile" text="Profile"></SideNavLink>
                <SideNavLink Icon={FiLogOut} url="" text="Logout" ></SideNavLink>
            </div>
        </div>
    );
};

export default SideNav;