/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "../Pages/Login";

const PrivateRoute = ({children}) => {

    const { user } = useAuth();
    if (user) {
        return (
            <>
                {children}
            </>
        );
    }

    return <Login></Login>
};

export default PrivateRoute;