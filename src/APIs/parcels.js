import axiosSecure from ".";

export const addParcel = async (parcel) => {
    const data = await axiosSecure.post(`/addParcel`, parcel);
    return data
}