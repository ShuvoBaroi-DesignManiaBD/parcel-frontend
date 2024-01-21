import axiosSecure from ".";

export const makeDeliveryMen = async (email) => {
    const data = await axiosSecure.patch(`/beDeliveryMen/${email}`);
    return data
}