import { Dialog, DialogBody } from "@material-tailwind/react";
import { CgCloseO } from "react-icons/cg";
import { updateParcel } from "../../APIs/parcels";
import toast from "react-hot-toast";

const Review = ({ parcel, index, isOpen, setOpen, refetch }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = parcel?._id;
    const {_id, ...prevData} = parcel;
    const form = e.target;
    const type = form.parcelType.value;
    const status = form.status.value;
    const receiversName = form.receiversName.value;
    const receiversPhone = form.receiversPhone.value;
    const deliveryAddress = form.deliveryAddress.value;
    const deliveryManID = form.deliveryManId.value;
    const deliveryMan = form.deliveryMan.value;
    const deliveryDate = form.deliveryDate.value;

    const data = {
      ...prevData,
      type,
      status,
      receiversName,
      receiversPhone,
      deliveryMan,
      deliveryAddress,
      deliveryManID,
      deliveryDate
    };

    // console.log(data);
    updateParcel(data, parcel?._id)
      .then(()=>{
        toast.success("Successfully updated") && setOpen(null);
        refetch();
      })
      .catch(err => console.error(err));
    form.reset()
      console.log(data);
  }
  return (
    <Dialog open={isOpen === index} size="lg" className="max-h-[85vh] overflow-x-hidden rounded-lg">
      <DialogBody>
        <div className="flex justify-end">
          <CgCloseO className="w-8 h-8 text-red-500" onClick={() => setOpen(null)}></CgCloseO>
        </div>
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
                  Select Delivery man
                </label>
                <select
                  id="deliveryMan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="deliveryManId"
                >
                  <option selected="">Select delivery man</option>
                  {deliveryMen.map(man => {
                    return <>
                      <option value={man._id} key={man._id}>{man.name}</option>
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
                  Change status to
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="status"
                >
                  <option value="On the way" selected="">On the way</option>
                  <option value="Delivered">Delivered</option>
                </select>

              </div>
              {/* Requested Delivery Date */}
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
                  name="deliveryDate"
                  id="deliveryDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Parcel delivery date"
                  defaultValue={Date.now()}
                  required
                />

              </div>
              {/* Requested Delivery Date */}
              <div className="flex gap-3 justify-end col-span-3">
                <button
                  className="primaryButton px-10 bordr-2 border mt-5 bg-secondary"
                >
                  Update
                </button>
                <button
                  type="submit"
                  className="primaryButton bordr-2 border mt-5 px-10"
                >
                  Assign
                </button>
              </div>

            </div>

          </form>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default Review;