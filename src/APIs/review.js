import axiosSecure from ".";

// ======== Review related hooks =======
export const addReview = async (review) => {
    const result = await axiosSecure.post(`/addreview`, review);
    return result
}

export const getReview = async (parcelId) => {
    const data = await axiosSecure.get(`/get-review?id=${parcelId}`);
    return data
}