import { getRole } from "../APIs/Auth";
import { useAuth } from "./useAuth";

export const useRole = async () => {
    const { user } = useAuth();
    // console.log(user.email);
    const getUser = await getRole(user.email)
    // console.log(getUser);
    const role = await getUser.data.role;

    return role;
}