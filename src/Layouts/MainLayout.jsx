import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { useAuth } from "../Hooks/useAuth";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";

const MainLayout = () => {
    const {loading} = useAuth();
        if (loading) {
            return <LoadingSpinner></LoadingSpinner>
        } else {
            return <>
            <Header></Header>
            <div className="min-h-[calc(100vh-310px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
        }
        
};

export default MainLayout;