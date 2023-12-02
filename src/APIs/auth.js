import axiosSecure from "."
import { useAuth } from "../Hooks/useAuth";

export const getUsers = async (page) => {
    const data = await axiosSecure.get(`/users?page=${page}`);
    return data
}

export const saveUser = async (userData) => {
    console.log(userData);
    const user = await getRole(userData.email);
    const currentUser = {
        name: userData?.name || userData.displayName,
        email: userData?.email,
        role: userData?.role || user?.role || 'user',
        photo: userData?.photo || userData?.photoURL,
    }

    console.log(currentUser);
    const {data} = await axiosSecure.put(`/saveUser`, currentUser);
    return data
}

export const getRole = async (email) => {
    console.log(email);

    const data = await axiosSecure.get(`/users/${email}`);
    return data
}

export const changeRole = async (email, role) => {
    const userData = {role};
    console.log(email, role);
    const {data} = await axiosSecure.patch(`/changeRole/${email}`, userData);
    return data
}