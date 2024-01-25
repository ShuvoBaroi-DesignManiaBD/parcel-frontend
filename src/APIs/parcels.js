import axiosSecure from ".";

export const getParcels = async (email, page) => {
    const data = await axiosSecure.get(`/getParcels?email=${email}&page=${page}`);
    return data
}

export const addParcel = async (parcel) => {
    const data = await axiosSecure.post(`/addParcel`, parcel);
    return data
}

export const updateParcel = async (parcel, id) => {
    const data = await axiosSecure.put(`/updateParcel?id=${id}`, parcel);
    return data
}


export const cancelParcel = async (id) => {
    const data = await axiosSecure.patch(`/cancelParcel?id=${id}`);
    return data
}

export const updateParcelStatus = async (id, status) => {
    const data = await axiosSecure.put(`/change-parcel-status?id=${id}&status=${status}`);
    return data
}

export const allParcels = async (page) => {
    const data = await axiosSecure.get(`/allParcels?page=${page}`);
    return data
}




