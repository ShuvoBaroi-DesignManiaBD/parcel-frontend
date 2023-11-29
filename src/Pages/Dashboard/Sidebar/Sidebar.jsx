import React from 'react';
import Logo from '../../../Components/Shared/Logo';
import SideNav from './Sidenav';

const Sidebar = () => {
    return (
        <div className='overflow-y-hidden col-span-1'>
            {/* Sidebar Toggle */}
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center py-4">
                    {/* Navigation Toggle */}
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-600"
                        data-hs-overlay="#application-sidebar"
                        aria-controls="application-sidebar"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle Navigation</span>
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
                            <line x1={3} x2={21} y1={6} y2={6} />
                            <line x1={3} x2={21} y1={12} y2={12} />
                            <line x1={3} x2={21} y1={18} y2={18} />
                        </svg>
                    </button>
                    {/* End Navigation Toggle */}
                    {/* Breadcrumb */}
                    <ol
                        className="ms-3 flex items-center whitespace-nowrap"
                        aria-label="Breadcrumb"
                    >
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                            Application Layout
                            <svg
                                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </li>
                        <li
                            className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
                            aria-current="page"
                        >
                            Statistics
                        </li>
                    </ol>
                    {/* End Breadcrumb */}
                </div>
            </div>
            {/* End Sidebar Toggle */}
            {/* Sidebar */}
            <div
                id="application-sidebar"
                className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-none lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
            >
                <div className="px-6">
                    <Logo width="180"></Logo>
                </div>
                <nav
                    className="hs-accordion-group p-6 w-full h-full flex flex-col flex-wrap"
                    data-hs-accordion-always-open=""
                >
                    <SideNav></SideNav>
                </nav>
            </div>
            {/* End Sidebar */}
        </div>
    );
};

export default Sidebar;