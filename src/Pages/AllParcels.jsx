import { useState } from "react";
// import { getUsers } from "../../../APIs/Auth";
// import TableBody from "../../../Components/Table/UsersTable.jsx/TableBody";
// import TableHead from "../../../Components/Table/UsersTable.jsx/TableHead";
import { useQuery } from "@tanstack/react-query";
import { allParcels, getParcels } from "../APIs/parcels";
import TableHead from "../Components/Table/Shared/TableHead";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import TableBody from "../Components/Table/AllParcels/TableBody";


const AllParcels = () => {
  const {user} = useAuth();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const TableHeadings = ["User", "Phone", "Booking Date", "Delivery Date", "Booking Status", "Payment Status", "Action"]
  const { isFetching, refetch, data:{allParcels: parcels, parcelsCount} } = useQuery({
    queryKey: ['parcels', page],
    queryFn: async () => {
        const res = await allParcels(page)
        const data = await res.data;
        console.log(data);
        return data;
    },
    initialData: {allParcels:[], parcelsCount:0}
});

const totalPages = Math.ceil(parcelsCount / 5);
const pages = [... new Array(totalPages).fill(0)];
console.log(page, pages, pages.length);
const handleOpen = () => setOpen(!open);
    return (
        <>
  {/* Table Section */}
  <div className="max-w-[80vw] sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Card */}
    <div className="flex flex-col justify-between">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
            {/* Header */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  All Parcels
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add parcels, edit and more.
                </p>
              </div>
              <div>
                <div className="inline-flex gap-x-2">
                  <Link
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to='/dashboard/book-parcel'
                  >
                    <svg
                      className="flex-shrink-0 w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                    Add new
                  </Link>
                </div>
              </div>
            </div>
            {/* End Header */}
            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <TableHead labels={TableHeadings}></TableHead>
              <TableBody allParcels={parcels} refetch={refetch} isFetching={isFetching}></TableBody>
            </table>
            {/* End Table */}
            {/* Footer */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {parcelsCount}
                  </span>{" "}
                  results
                </p>
              </div>
              <div>
                <div className="inline-flex gap-x-2">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => page > 0 ? setPage(page - 1) : setPage(0)}
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
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Prev
                  </button>
                  {pages?.map((item, index) =>{
                    return <button key={index}
                    type="button"
                    className={`py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 text-text shadow-sm hover:bg-gray-50 ${page == index ? 'bg-primary text-white hover:bg-primary' : ''}`}
                    onClick={()=> setPage(index)}
                  >
                    {index + 1}
                  </button>
                  })}
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={()=> page + 1 < pages.length ? setPage(page + 1) : setPage(page)}
                  >
                    Next
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
    </div>
    {/* End Card */}
  </div>
  {/* End Table Section */}
</>

    );
};

export default AllParcels;