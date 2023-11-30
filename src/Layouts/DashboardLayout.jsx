import { Outlet } from "react-router-dom";
import DashboardHeader from "../Pages/Dashboard/DashboardHeader";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import { useAuth } from "../Hooks/useAuth";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
const DashboardLayout = () => {
    const {loading} = useAuth();
        if (loading) {
            return <LoadingSpinner></LoadingSpinner>
        } else {
            return <>
            <DashboardHeader></DashboardHeader>
            <div className="grid grid-cols-12 justify-between">
                <Sidebar></Sidebar>
                <div className="col-span-11 h-[calc(100vh-84px)] bg-[#f1faff] p-10">
                <Outlet></Outlet>
                </div>
            </div>
            </>
        }

};

export default DashboardLayout;