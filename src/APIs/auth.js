import axiosSecure from "."
import { useAuth } from "../Hooks/useAuth";

export const getUsers = async (page) => {
    const data = await axiosSecure.get(`/users?page=${page}`);
    return data
}

export const saveUser = async (userData) => {
    console.log(userData);
    const user = await getUser(userData.email);
    const currentUser = {
        name: userData?.name || user?.displayName,
        email: userData?.email || user?.email,
        role: userData?.role || user?.role || 'user',
        photo: userData?.photo || user?.photoURL,
    }

    console.log(currentUser);
    const {data} = await axiosSecure.put(`/saveUser`, currentUser);
    return data
}

export const getUser = async (email) => {
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

