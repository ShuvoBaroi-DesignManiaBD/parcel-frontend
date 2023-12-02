/* eslint-disable react/prop-types */
import React from 'react';
import { changeRole, getUsers } from '../../../APIs/Auth';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import toast from 'react-hot-toast';

const TableBody = ({allUsers, refetch, isFetching}) => {
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

    const handleChange = (email, role) => {
        changeRole(email, role)
        .then(()=> {
            toast.success(`Successfully changed the role to ${role}`)
            refetch();
        })
    }

    if (isFetching) {
        return <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div>;
    } else {
        return (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {allUsers?.map((user) => {
                    console.log(user);
                    return (
                        <tr key={user?._id || Date.now()}>
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
                                        <img
                                            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                                            src={user?.photo}
                                            alt="Image Description"
                                        />
                                        <div className="grow">
                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                {user?.name}
                                            </span>
                                            <span className="block text-sm text-gray-500">
                                                {user?.email}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="h-px w-24 whitespace-nowrap">
                                <div className="px-6 py-3">
                                    <span className="block text-sm font-medium text-text dark:text-gray-200">
                                        {user?.role}
                                    </span>
                                    
                                </div>
                            </td>
                            <td className="h-px w-24 whitespace-nowrap">
                                <div className="px-6 py-3">
                                    <span className="block text-sm font-medium text-text dark:text-gray-200">
                                        {user?.phone || "---"}
                                    </span>
                                    
                                </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-center">
                                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                        <svg
                                            className="w-2.5 h-2.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                        Active
                                    </span>
                                </div>
                            </td>
                            
                            <td className="h-px w-40 whitespace-nowrap">
                                <div className="px-6 py-3 text-center">
                                    <span className="text-sm text-text text-center font-medium">
                                        {user?.parcelBooked || 0}
                                    </span>
                                </div>
                            </td>
                            <td className="h-px w-40 whitespace-nowrap">
                                <div className="px-6 py-3 text-center">
                                    <span className="text-sm text-text font-medium">
                                        {user?.total || 0}
                                    </span>
                                </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
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
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-1.5 flex gap-4">
                                    <a
                                        className="inline-flex items-center gap-x-1 text-sm text-green-500 font-semibold decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        className="inline-flex items-center gap-x-1 text-sm text-red-600 font-semibold decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="#"
                                    >
                                        Delete
                                    </a>
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