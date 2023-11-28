import { FiLogOut } from "react-icons/fi"; 
import { AiFillDashboard } from "react-icons/ai"; 
import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const {user, logout} = useAuth()
  const [open, setOpen] = useState(false);
  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => setOpen(!open)}
      >
        <img
          className="w-10 h-10 rounded-full bg-cover object-cover"
          src={user?.photoURL}
          alt="Name"
        />
        
        <svg
          className="hs-dropdown-open:rotate-180 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open &&
        <div
          className="absolute top-12 right-0 transition-[opacity,margin] duration min-w-[12rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
        >
          <span
            className="flex justify-center border-b items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            
          >
            <span className="text font-semibold text-center capitalize text-gray-600 truncate max-w-[7.5rem] dark:text-gray-400">
          {user?.displayName}
        </span>
          </span>
          <Link
            className="flex items-center gap-x-2.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            to="/dashboard"
          >
            <AiFillDashboard size={20}/> Dashboard
          </Link>
          <Link
            className="flex items-center gap-x-2.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            to="/login" onClick={logout}
          >
            <FiLogOut size={20}/> Logout
          </Link>
        </div>}

    </div>

  );
};

export default UserDropdown;