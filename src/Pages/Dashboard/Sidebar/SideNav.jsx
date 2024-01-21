/* eslint-disable react-hooks/rules-of-hooks */

import { FiLogOut } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import SideNavLink from "./SideNavLink";
import { useAuth } from "../../../Hooks/useAuth";
import { useRole } from "../../../Hooks/useRole";
import { useState } from "react";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import DeliveryManNav from "./DeliveryManNav";
import SwitchRoleTab from "../../../Components/Tabs/SwitchRoleTab";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import { getUser } from "../../../APIs/Auth";

const SideNav = () => {
    // const [role, setRole] = useState(false);
    const {user} = useAuth();
    // const {role, isPending, isLoading} = useRole();

    const { isFetching , refetch, data:role="" } = useQuery({
    queryKey: ['role'],
    queryFn: async () => {
    const data = await getUser(user.email)
    const role = await data.data.role;
    console.log(role);
    return role;
        },
      })

      console.log(role);
    // useRole()
    //     .then(res => {
    //         console.log(res);
    //         setRole(res)})
    //     .catch(err => console.error(err))

    

    return (
        <div className="h-full flex flex-col items-stretch justify-between space-y-1.5">
            { isFetching ?
                <LoadingSpinner></LoadingSpinner>
            :
                <nav className="space-y-2">
                {/* Admin navingation */}
                {role === 'admin' && <AdminNav></AdminNav>}

                {/* Delivery men navigation */}
                {role === 'deliveryman' && 
                <>
                <DeliveryManNav></DeliveryManNav>
                </>}

                {/* User navigation */}
                {(role === 'user' || role === '') && 
                <UserNav refetch={refetch}></UserNav>}
            </nav>
            }

            <div className="border-t py-5">
                <SideNavLink Icon={FiSettings} url="/dashboard/profile" text="Profile"></SideNavLink>
                <SideNavLink Icon={FiLogOut} url="" text="Logout" ></SideNavLink>
            </div>
        </div>
    );
};

export default SideNav;