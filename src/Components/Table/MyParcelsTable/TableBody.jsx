/* eslint-disable react/prop-types */
import { useState } from 'react';
import { changeRole, getUsers } from '../../../APIs/Auth';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import toast from 'react-hot-toast';
import TableTd from '../Shared/TableTd';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import { cancelParcel } from '../../../APIs/parcels';
import Review from '../../Popups/Review';


const TableBody = ({ myParcels, refetch, isFetching }) => {
    const [open, setOpen] = useState(null);
    console.log(myParcels);
    const navigate = useNavigate();

    const secondsToDate = seconds => {
        console.log(seconds);
        let normalDate = new Date(seconds).toLocaleString('en-GB', { timeZone: 'UTC' })
        return normalDate.split(",")[0]
    }
    const handleChange = (email, role) => {
        changeRole(email, role)
            .then(() => {
                toast.success(`Successfully changed the role to ${role}`)
                refetch();
            })
    }

    const handleCancel = (id) => {
        return

    }

    const handlePay = () => {

    }

    if (isFetching) {
        return <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div>;
    } else {
        return (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {myParcels?.map((parcel, index) => {
                    const btnStyles = `primaryButtonSm mx-auto text-[14px] px-3 py-1.5 font-medium disabled:bg-gray-400 ${(parcel?.status == 'Pending' && 'bg-teal-500')
                        || (parcel?.status == 'Delivered' && 'bg-orange-900') || (parcel?.status == 'Canceled' && 'bg-[#E3C5C3] disabled:bg-[#E3C5C3] disabled:text-text')
                        }`
                    console.log(parcel);
                    const statusColor = parcel?.status && ((parcel.status == 'Pending' && "bg-[#FAE11E] text-text") || (parcel.status == 'On the way' && "bg-teal-100 text-teal-800") || (parcel.status == 'Delivered' && "bg-gray-300 text-text")
                        || (parcel.status == 'Canceled' && "bg-[#E3C5C3] text-text"));
                    return (
                        <>
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

                            <TableTd text={parcel?.type}></TableTd>
                            <TableTd text={parcel?.requestedDate}></TableTd>
                            <TableTd text={parcel?.deliveryDate || '---'}></TableTd>
                            <TableTd text={parcel?.bookingDate ? secondsToDate(parcel?.bookingDate) : "---"}></TableTd>
                            <TableTd text={parcel?.deliveryManID || "---"}></TableTd>

                            {/* Booking status start */}
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-center">
                                    <span className={`py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium rounded-full ${statusColor}`}>
                                        {parcel?.status || "---"}
                                    </span>
                                </div>
                            </td>
                            {/* Booking status end */}

                            {/* Payment actions start */}
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-1.5 flex gap-4 text-center">
                                    {parcel?.status === 'Pending' &&
                                        <button
                                            className={btnStyles}
                                            onClick={() => handlePay(parcel?.email, parcel?._id)}
                                        >
                                            Pay
                                        </button>}
                                    {parcel?.status === 'Delivered' &&
                                        <button
                                            className={btnStyles}
                                            onClick={() => handlePay(parcel?.email, parcel?._id)}
                                        >
                                            Give review
                                        </button>}
                                    {parcel?.status === 'On the way' &&
                                        <button
                                            className={btnStyles}
                                            onClick={() => handlePay(parcel?.email, parcel?._id)}
                                            disabled
                                        >
                                            Paid
                                        </button>}
                                    {parcel?.status === 'Canceled' &&
                                        <button
                                            className={btnStyles}
                                            onClick={() => handlePay(parcel?.email, parcel?._id)}
                                            disabled
                                        >
                                            Canceled
                                        </button>}
                                    {/* <button
                                        className={btnStyles}
                                        disabled={parcel?.status !== ('Pending' || 'Delivered') && true}
                                        onClick={() => handleChange(parcel?.email, parcel?._id)}
                                    >
                                        {((parcel?.status === ('On the way' || 'Returned')) && 'Paid')
                                            || ((parcel?.status === 'Pending') && 'Pay')
                                            || ((parcel?.status === 'Delivered') && 'Give review')
                                            || ((parcel?.status === 'Canceled') && 'Canceled')}
                                    </button> */}

                                </div>
                            </td>
                            {/* Payment actions end */}

                            {/* User actions start */}
                            <td className="h-px w-px whitespace-nowrap">
                                <div className={`px-6 py-1.5 flex justify-center gap-4`}>
                                    {parcel?.status == 'Pending' ?
                                        <>
                                            <button
                                                className="text-sm text-primary font-bold underline disabled:bg-gray-400"
                                                disabled={parcel?.role === 'deliveryman' && true}
                                                onClick={() => navigate('/dashboard/update-parcel', { state: parcel })}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="text-sm text-red-500 underline font-bold disabled:bg-gray-400"
                                                type='button'
                                                disabled={parcel?.role === 'admin' && true}
                                                data-hs-overlay="#hs-vertically-centered-modal"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You won't be able to revert this!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#F65236",
                                                        cancelButtonColor: "#009688",
                                                        cancelButtonText: "Go back",
                                                        confirmButtonText: "Yes, cancel!"
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            cancelParcel(parcel?._id)
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
                                                }}
                                            >
                                                Cancel
                                            </button>

                                        </> : <button disabled className='text-[13px] font-medium text-red-800/70'>Edit not allowed</button>}
                                </div>
                            </td>
                            {/* User actions end */}
                        </tr>
                        {/* <Review isOpen={open} parcel={parcel} setOpen={setOpen} index={index} refetch={refetch}></Review> */}
                        </>
                    );
                })}

            </tbody>
        );
    }

};

export default TableBody;