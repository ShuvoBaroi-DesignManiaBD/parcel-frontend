import { Dialog, DialogBody } from "@material-tailwind/react";
import { CgCloseO } from "react-icons/cg";

const ManageParcel = ({ parcel, deliveryMen, index, isOpen, setOpen }) => {
  const handleSubmit = (e) => {
    console.log(e);
  }
  return (
    <Dialog open={isOpen === index} size="lg" className="max-h-[85vh] overflow-x-hidden rounded-lg">
      <DialogBody>
        <div className="flex justify-end">
          <CgCloseO className="w-8 h-8 text-red-500" onClick={() => setOpen(null)}></CgCloseO>
        </div>
        {/* <UpdateFood id={food?._id} foodData={food} setOpen={setOpen} refetch={refetch}></UpdateFood> */}
        <div className="mx-auto lg:py-16">
          <h2 className="mb-4 secondaryHeading text-center font-bold text-gray-900 dark:text-white">
            Assign a delivery man 
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 border-b-2 pb-8">
              {/* User name */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parcel Owner:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={parcel?.name}
                  readOnly
                  placeholder="Your name"
                  required
                />

              </div>
              {/* User name */}

              {/* Parcel type */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="parcelType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parcel type
                </label>
                <input
                  type="text"
                  name="parcelType"
                  id="parcelType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your parcel type"
                  defaultValue={parcel?.type}
                  required
                />

              </div>
              {/* Parcel type */}

              {/* Requested Delivery Date */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="deliveryData"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Requested Delivery date
                </label>
                <input
                  type="date"
                  name="deliveryData"
                  id="deliveryData"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Parcel delivery date"
                  defaultValue={parcel?.requestedDate}
                  readOnly
                  required
                />

              </div>
              {/* Requested Delivery Date */}

              {/* Receivers name */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="receiversName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Receivers name
                </label>
                <input
                  type="text"
                  name="receiversName"
                  id="receiversName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="eg. Kian Shy"
                  defaultValue={parcel?.receiversName}
                  required
                />

              </div>
              {/* Receivers name */}

              {/* Receivers Phone number */}
              <div className="w-full">
                <label
                  htmlFor="receiversPhone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Receivers phone number
                </label>
                <input
                  type="number"
                  name="receiversPhone"
                  id="receiversPhone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="eg. +8801723423467"
                  defaultValue={parcel?.receiversPhone}
                  required
                />
              </div>
              {/* Receivers Phone number */}

              {/* Parcel delivery address */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="deliveryAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parcel delivery address
                </label>
                <input
                  type="text"
                  name="deliveryAddress"
                  id="deliveryAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="i.e 1068/1 taltola, post 3000, Dhaka"
                  defaultValue={parcel?.deliveryAddress}
                  required
                />

              </div>
              {/* Parcel delivery address */}

            </div>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 pt-8">
              <div>
              <label
                  htmlFor="deliveryData"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Delivery date
                </label>
                <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Select category</option>
                {deliveryMen.map(man=> {
                  return <>
                  <option value={man._id}>{man.name}</option>
                  </>
                })}
              </select>
              </div>
              {/* Requested Delivery Date */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="deliveryData"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Delivery date
                </label>
                <input
                  type="date"
                  name="deliveryData"
                  id="deliveryData"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Parcel delivery date"
                  defaultValue={Date.now()}
                  required
                />

              </div>
              {/* Requested Delivery Date */}
              <button
              type="submit"
              className="primaryButton bordr-2 border mt-5"
            >
              Assign
            </button>
            </div>
            
          </form>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ManageParcel;