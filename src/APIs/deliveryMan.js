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

export const getDeliveryMan = async (id) => {
    console.log(id);
    const data = await axiosSecure.get(`/deliveryman/${id}`);
    return data
}

export const getDeliveryList = async (id, page) => {
    console.log(id);
    const data = await axiosSecure.get(`/get-delivery-list?id=${id}&page=${page}`);
    return data
}