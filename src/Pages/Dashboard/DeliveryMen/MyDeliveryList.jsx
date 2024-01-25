import { useState } from "react";
import { getUser, getUsers } from "../../../APIs/Auth";
import TableHead from "../../../Components/Table/Shared/TableHead";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllDeliveryMan, getDeliveryList } from "../../../APIs/deliveryMan";
import TableBody from "../../../Components/Table/DeliveryList/TableBody";
import { useAuth } from "../../../Hooks/useAuth";

const MyDeliveryList = () => {
  const [page, setPage] = useState(0);
  const {user} = useAuth();
  const labels = ['Booked User', 'Booked User’s Phone','Receiver', 'Reciever phone', 'Receiver Address', 'Req. Delivery Date', 'Delivery Date', 'Location', 'Actions']
  // const { data: deliveryMan} = useQuery({
  //   queryKey: ['deliveryMan_info', page],
  //   queryFn: async () => {
  //     const {data} = await getUser(user?.email);
  //     return data;
  //   },
  //   initialData: {}
  // });

  const { isFetching, refetch, data: {currentPageItems, parcelsCount} } = useQuery({
    queryKey: ['deliveryList', page],
    queryFn: async () => {
      const {data:deliveryMan} = await getUser(user?.email);
      const deliveryList = await getDeliveryList(deliveryMan._id, page);
      const data = await deliveryList.data
      return data;
    },
    initialData: { currentPageItems: [], parcelsCount: 0 }
  });

  const totalPages = Math.ceil(parcelsCount / 5);
  const pages = [... new Array(totalPages).fill(0)];
  console.log(currentPageItems, parcelsCount);
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
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      My delivery list
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Manage the parcels which assigned to you
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <Link
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        to='add-user'
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
                        Add delivery man
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <TableHead labels={labels}></TableHead>
                  <TableBody list={currentPageItems} refetch={refetch} isFetching={isFetching}></TableBody>
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
                      {pages?.map((item, index) => {
                        return <button key={index}
                          type="button"
                          className={`py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 text-text shadow-sm hover:bg-gray-50 ${page == index ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
                          onClick={() => setPage(index)}
                        >
                          {index + 1}
                        </button>
                      })}
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={() => page + 1 < pages.length ? setPage(page + 1) : setPage(page)}
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

export default MyDeliveryList;