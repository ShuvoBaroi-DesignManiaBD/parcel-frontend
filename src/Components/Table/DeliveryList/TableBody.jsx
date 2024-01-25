/* eslint-disable react/prop-types */
import React from 'react';
import { changeRole, getUsers } from '../../../APIs/Auth';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import toast from 'react-hot-toast';
import TableTd from '../Shared/TableTd';
import ParcelLocation from '../../Maps/ParcelLocation';
import Swal from 'sweetalert2';
import { updateParcelStatus } from '../../../APIs/parcels';

const TableBody = ({ list, refetch, isFetching }) => {
    // const users = getUsers();
    // const { isFetching, refetch, data:users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await getUsers()
    //         const data = await res.data;
    //         console.log(data);
    //         return data;
    //     },
    // })

    const handleChange = (id, status) => {
        try{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#F65236",
                cancelButtonColor: "#009688",
                cancelButtonText: "Go back",
                confirmButtonText: `Yes, ${status === 'Canceled'? 'cancel': 'update status to Delivered for'} this parcel!`
            }).then((result) => {
                if (result.isConfirmed) {
                    updateParcelStatus(id, status)
                        .then(refetch())
                        .catch((error) => {
                            Swal.fire({
                                title: "Oops! Something went wrong.",
                                text: error,
                                icon: "error",
                                confirmButtonColor: "#0B3C5C",
                            })
                        })
                }
            })
        } catch(err){
            console.log(err);
        }
        // changeRole(email, role)
        //     .then(() => {
        //         toast.success(`Successfully changed the role to ${role}`)
        //         refetch();
        //     })
    }

    // const showMap = (longitude, latitude, zoom) => {
    //     return <ParcelLocation longitude={longitude} latitude={latitude} zoom={zoom}></ParcelLocation>
    // }

    if (isFetching) {
        return <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div>;
    } else {
        return (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {list?.map((parcel) => {
                    console.log(parcel);
                    const btnStyles = `primaryButton mx-auto text-[12px] px-3 py-1 font-medium disabled:bg-gray-400 disabled:text-text${
                        (parcel.status == 'Delivered' && "bg-gray-300 text-text")
                        || (parcel.status == 'Canceled' && "bg-red-100 text-text") || (parcel.status == 'Completed' && "bg-secondary text-white")
                        }`
                        const statusColor = parcel?.status && ((parcel.status == 'Pending' && "bg-[#FAE11E] text-text") || (parcel.status == 'On the way' && "bg-teal-100 text-teal-800") || (parcel.status == 'Delivered' && "bg-gray-300 text-text")
                        || (parcel.status == 'Canceled' && "bg-red-100 text-text") || (parcel.status == 'Completed' && "bg-secondary/20 text-text"));
                    return (
                        <tr key={parcel?._id || Date.now()}>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="ps-6 py-3 pr-4">
                                    <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                        <input
                                            type="checkbox"
                                            className="shrink-0 border-gray-300 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            id="hs-at-with-checkboxes-1"
                                        />
                                        <span className="sr-only">Checkbox</span>
                                    </label>
                                </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                    <div className="flex items-center gap-x-3">

                                        <div className="grow">
                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                {parcel?.name}
                                            </span>
                                            <span className="block text-sm text-gray-500">
                                                {parcel?.email}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <TableTd text={parcel?.phone || "---"}></TableTd>

                            <TableTd text={parcel?.receiversName || 0}></TableTd>
                            <TableTd text={parcel?.receiversPhone || 0}></TableTd>
                            <TableTd text={parcel?.deliveryAddress || 0}></TableTd>
                            <TableTd text={parcel?.requestedDate || 0}></TableTd>
                            <TableTd text={parcel?.deliveryDate || 0}></TableTd>
                            {/* <span onClick={()=>showMap(parcel?.latitude, parcel?.longtitude, 14)}>
                            <TableTd text={`Latitude:${parcel?.latitude}`} icon={`Longitude:${parcel?.longitude}`} className='text-primary font-medium '
                            ></TableTd>
                            </span> */}
                            <td className="h-px whitespace-nowrap">
                                <div className="px-6 py-3 text-center">
                                    <span className={`block text-sm font-medium text-text dark:text-gray-200 leading-7`}>
                                        Latitude: <strong>{parcel?.latitude}</strong> <br></br>
                                        Latitude: <strong>{parcel?.longitude}
                                        </strong>
                                    </span>

                                </div>
                            </td>

                            {/* <td className="h-px w-px whitespace-nowrap">
                                <div className={`px-6 py-1.5 flex justify-center gap-4`}>
                                <button
                                        className="primaryButtonSm text-[10px] px-2.5 py-1.5 font-medium disabled:bg-gray-400"
                                        disabled={user?.role === 'deliveryman' && true}
                                        onClick={()=>handleChange(user?.email, 'deliveryman')}
                                    >
                                        Make deliveryman
                                    </button>
                                    <button
                                        className="primaryButtonSm bg-secondary text-[10px] px-2.5 py-1.5 font-medium disabled:bg-gray-400"
                                        href="#"
                                        disabled={user?.role === 'admin' && true}
                                        onClick={()=>handleChange(user?.email, 'admin')}
                                    >
                                        Make admin
                                    </button>
                                    
                                </div>
                            </td> */}
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-1.5 flex gap-4">
                                    {parcel?.status !== 'Delivered' && 
                                    <>
                                    <a
                                    className="primaryButton bg-red-800 mx-auto text-[12px] px-3 py-1"
                                    onClick={()=>handleChange(parcel?._id, 'Canceled')}
                                >
                                    Cancel
                                </a>
                                <a
                                    className={btnStyles}
                                    disabled={parcel?.status === ('Cancelled' || 'Delivered' || 'Completed') && true}
                                    onClick={()=>handleChange(parcel?._id, 'Delivered')}
                                >
                                    Deliver
                                </a>
                                    </>
                                    }
                                    {parcel?.status !== 'On the way' &&
                                    <a
                                    className="primaryButton bg-gray-200 text-[12px] px-3 py-1 text-text hover:bg-gray-200 hover:text-text"
                                    disabled
                                >
                                    {parcel?.status !== 'Completed'? parcel?.status : 'Review given'}
                                </a>
                                    }
                                </div>
                            </td>
                        </tr>
                    );
                })}

            </tbody>
        );
    }

};

export default TableBody;