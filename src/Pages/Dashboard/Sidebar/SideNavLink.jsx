/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

const SideNavLink = ({Icon, url, text, imageURL, className}) => {
    const {pathname} = useLocation();
    const path = pathname.split('/')[2] || pathname.split('/')[1]
    console.log('pathname=',pathname, 'path=',path, url);
    const {logout} = useAuth();
    // const activeStatus = ({isActive}) => isActive && "bg-gray-600";
    const activeStatus = () => (path === url) && "bg-bg";
    return (
            <NavLink className={`flex text font-medium items-center gap-x-3.5 py-2 px-2.5 text-slate-700 rounded-lg hover:bg-bg dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
            ${(path === url) && "bg-bg"} ${className}
            `}
                to={url}
                onClick={text === "Logout" ? logout : ''}
                >
                    {/* {!Icon ? <svg
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>: <Icon size="18"></Icon>
                } */}
                    {imageURL? <img src={imageURL} className="w-[20px]"/> : <Icon size="18"></Icon>}
                {text}
            </NavLink>
        
    );
};

export default SideNavLink;