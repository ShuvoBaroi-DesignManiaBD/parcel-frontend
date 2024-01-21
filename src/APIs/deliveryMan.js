import axiosSecure from ".";

export const getAllDeliveryMan = async (page) => {
    if (page !== (undefined || null)) {
        const data = await axiosSecure.get(`/allDeliveryMan?page=${page}`);
        return data
    }
    console.log(page);
    const data = await axiosSecure.get(`/allDeliveryMan`);
    return data
}