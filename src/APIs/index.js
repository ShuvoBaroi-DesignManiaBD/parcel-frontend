import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials:true,
    // credentials: 'include',
})

export default axiosSecure