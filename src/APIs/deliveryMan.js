import axiosSecure from ".";

export const getAllDeliveryMan = async (page) => {
    const data = await axiosSecure.get(`/allDeliveryMan?page=${page}`);
    return data
}