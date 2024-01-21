import { useQuery } from "@tanstack/react-query";
import { getUser } from "../APIs/Auth";
import { useAuth } from "./useAuth";

export const useRole = async () => {
    const { user } = useAuth();
    const data = await getUser(user.email)
    const role = await data.data.role;

    return role;
}

// export const useRole = async () => {
//     const { user } = useAuth();
//     const { isLoading, isPending, data:role } = useQuery({
//     queryKey: ['role'],
//     queryFn: async () => {
//     const getUser = await getRole(user.email)
//     const role = await getUser.data.role;
//     console.log(role);
//     return role;
//         },
//       })

//       console.log(role, isPending);
//     return {role, isPending, isLoading}
// }