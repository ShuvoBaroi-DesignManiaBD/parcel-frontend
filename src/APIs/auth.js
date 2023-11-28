import axiosSecure from "."

export const saveUser = async (userData) => {
    const currentUser = {
        name: userData?.name,
        email: userData?.email,
        role: userData?.role,
        photo: userData?.photo,
    }

    const {data} = await axiosSecure.post(`/users/${userData?.email}`, currentUser);
    
    return data
}