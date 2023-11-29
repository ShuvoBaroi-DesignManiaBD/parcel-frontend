

import { MdOutlineFeedback } from "react-icons/md"; 

import { HiOutlineClipboardList } from "react-icons/hi"; 
import { BsBoxSeam } from "react-icons/bs"; 
import { FiLogOut } from "react-icons/fi"; 
import { FiSettings } from "react-icons/fi"; 
import { FiUsers } from "react-icons/fi";
import { BsBoxes } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import SideNavLink from "./SideNavLink";

const SideNav = () => {
    return (
        <div className="h-full flex flex-col items-stretch justify-between space-y-1.5">
            <ul className="space-y-2">
            <SideNavLink Icon={AiOutlineDashboard} url="/dashboard" text="Statistics"></SideNavLink>
            <SideNavLink Icon={BsBoxes} url="all-parcels" text="All Parcels"></SideNavLink>
            <SideNavLink Icon={BsBoxes} url="my-parcels" text="My Parcels"></SideNavLink>
            <SideNavLink Icon={BsBoxSeam} url="book-parcel" text="Book a parcel"></SideNavLink>
            <SideNavLink Icon={FiUsers} url="users" text="All Users"></SideNavLink>
            <SideNavLink Icon={HiOutlineClipboardList} url="delivery-list" text="My delivery list"></SideNavLink>
            <SideNavLink Icon={MdOutlineFeedback} url="my-reviews" text="My Reviews"></SideNavLink>
            <SideNavLink imageURL="https://i.ibb.co/1K47SWT/delivery-man.webp" url="/dashboard/all-deliverymen" text="All Delivery Men"></SideNavLink>
            </ul>                            

            {/* <li className="hs-accordion" id="projects-accordion">
                            <button
                                type="button"
                                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                Projects
                                <svg
                                    className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            <div
                                id="projects-accordion-child"
                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                            >
                                <ul className="pt-2 ps-2">
                                    <li>
                                        <a
                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            href="#"
                                        >
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            href="#"
                                        >
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            href="#"
                                        >
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                        <div className="border-t py-5">
                        <SideNavLink Icon={FiSettings} url="/profile" text="Profile"></SideNavLink>                            
                        <SideNavLink Icon={FiLogOut} url="" text="Logout" ></SideNavLink>                            
                        </div>
        </div>
    );
};

export default SideNav;