import { useAuth } from "../Hooks/useAuth";
import ErrorPage from "../Pages/ErrorPage"
import { useRole } from "../Hooks/useRole";
import { useState } from "react";

const AdminRoute = ({children}) => {
    const [role, setRole] = useState('')
    useRole()
    .then(res => setRole(res))
    .catch(err => console.error(err))

    const { user } = useAuth();
    if (user && role === 'admin') {
        return (
            <>
                {children}
            </>
        );
    }

    return <ErrorPage></ErrorPage>
};

export default AdminRoute;