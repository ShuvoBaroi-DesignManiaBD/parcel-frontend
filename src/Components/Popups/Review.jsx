import { Dialog, DialogBody } from "@material-tailwind/react";
import { CgCloseO } from "react-icons/cg";
import { updateParcel, updateParcelStatus } from "../../APIs/parcels";
import toast from "react-hot-toast";
import { getDeliveryMan, getUser } from "../../APIs/Auth";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {Rating, Typography} from "@material-tailwind/react";
import { addReview, getReview } from "../../APIs/review";

const Review = ({ parcel, index, isOpen, setOpen, refetch }) => {
  
  const [rated, setRated] = React.useState(4);
  const { data: userInfo } = useQuery({
    queryKey: ['deliveryMan'],
    queryFn: async () => {
      const res = await getDeliveryMan(parcel?.deliveryMan)
      const data = await res.data;
      console.log(data);
      return data;
    },
    initialData: {}
  })

  const { data: userReview } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      const res = await getReview(parcel?._id)
      const data = await res.data;
      console.log(data);
      return data;
    },
    initialData: {}
  })

  console.log(userInfo);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const parcelId = parcel?._id;
    const customerEmail = parcel?.email;
    const deliveryManId = parcel?.deliveryManID;
    const rating = rated;
    const feedback = form.feedback.value

    const review = {
      parcelId, customerEmail, deliveryManId, rating, feedback
    };

    console.log(review);
    try{
      await addReview(review);
      await updateParcelStatus(parcelId, 'Completed');
      await setOpen(null);
      toast.success("Thanks for your valuable feedback!")
      await refetch();
    } catch(err){
      return toast.error(err);
    }
    form.reset();
  }
  return (
    <Dialog open={isOpen === index} size="lg" className="max-h-[85vh] overflow-x-hidden rounded-lg">
      <DialogBody>
        <div className="flex justify-end">
          <CgCloseO className="w-8 h-8 text-red-500 cursor-pointer" onClick={() => setOpen(null)}></CgCloseO>
        </div>
        <div className="mx-auto lg:p-10">
          <h2 className="mb-10 secondaryHeading text-center font-bold text-gray-900 dark:text-white">
            Help us to improve by your valuable feedback
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-12">
            <div className="mb-8 col-span-5 border-r-2 pr-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                  Delivery man's info
                </h2>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage your name, password and account settings.
                </p> */}
              </div>
              {/* Grid */}
              <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                <div className="sm:col-span-4">
                  <label className="inline-block font-normal text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Profile photo
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-8">
                  <div className="flex items-center gap-5">
                    <img
                      className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                      name='profilePhoto'
                      src={userInfo?.photo}
                      alt="Profile_photo"
                    />
                  </div>
                </div>
                {/* Start name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-full-name"
                    className="inline-block text-sm font-normal text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Full name
                  </label>
                </div>
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="af-account-full-name"
                      name="name"
                      type="text"
                      className="py-2 px-3 pe-11 capitalize block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Your name"
                      defaultValue={userInfo?.name}
                    />
                  </div>
                </div>
                {/* Start Id */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block font-normal text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    ID
                  </label>
                </div>
                <div className="sm:col-span-9">
                  <input
                    id="af-account-email"
                    type="email"
                    defaultValue={userInfo?._id}
                    readOnly
                    className="py-2 px-3 pe-11 block w-full ring-0 focus:ring-0 border-gray-200 shadow-sm text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="maria@site.com"
                  />
                </div>
                {/* End id */}

                {/* Start Email */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block font-normal text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Email
                  </label>
                </div>
                <div className="sm:col-span-9">
                  <input
                    id="af-account-email"
                    type="email"
                    defaultValue={userInfo?.email}
                    readOnly
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="maria@site.com"
                  />
                </div>
                {/* End Email */}
              </div>
              {/* End Grid */}
            </div>
            <div className="grid gap-4 col-span-7 sm:grid-cols-3 sm:gap-6 pb-8 ml-5">
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

              {/* Parcel received */}
              <div className="grid-cols-3 lg:grid-cols-1">
                <label
                  htmlFor="deliveryData"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parcel received
                </label>
                <input
                  type="date"
                  name="deliveryData"
                  id="deliveryData"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Parcel delivery date"
                  defaultValue={parcel?.deliveryDate}
                  readOnly
                  required
                />

              </div>
              {/* Requested Delivery Date */}
              <div className="col-span-full flex items-center gap-2 font-bold text-blue-gray-500">
                <h5 className="text-text font-medium">How was our performance? </h5>
                <Rating value={parcel?.status === 'Completed' ? userReview?.rating : 4} onChange={(value) => setRated(value)} 
                readonly={parcel?.status === 'Completed' ? true : false}
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="feedback"
                  className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Write your thoughts here..."
                  defaultValue={parcel?.status === 'Completed' ? userReview?.feedback : ''}
                  readOnly={parcel?.status === 'Completed' ? true : false}
                />
              </div>

            {parcel?.status !== 'Completed' && <input type="submit" className="primaryButton" value="submit Review"/>}
            </div>
          </form>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default Review;