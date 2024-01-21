import { useState } from 'react';
// import { useAuth } from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
// import { addParcel } from '../../../APIs/parcels';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { getUser } from '../../../APIs/Auth';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../Hooks/useAuth';
import { getUser } from '../APIs/Auth';
import { updateParcel } from '../APIs/parcels';
import ErrorPage from './ErrorPage';

const UpdateParcel = () => {
    const location = useLocation();
    const parcel = location?.state;
    console.log(parcel , location);
    const navigate = useNavigate();
    const {user} = useAuth();
    const { data:phone = '' } = useQuery({
          queryKey: ['phone'],
          queryFn: async () => {
              const res = await getUser(user.email)
              const data = await res.data;
              console.log(data);
              return data;
          },
      })

    const [price, setPrice] = useState(parcel.price);
    const calculatedPrice = (e) => {
      const weight = parseInt(e.target.value);
      console.log(weight);
      if (weight === 1) {
        setPrice(50)
      } else if (weight === 2) {
        setPrice(100)
      } else if (weight > 2) {
        setPrice(150)
      } else {
        setPrice(0)
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const id = parcel?._id
      const form = e.target;
      const name = parcel?.name;
      const email = parcel?.email;
      const phone = parcel.phone.value;
      const type = form.parcelType.value;
      const weight = form.parcelWeight.value;
      const status = "pending";
      const receiversName = form.receiversName.value;
      const receiversPhone = form.receiversPhone.value;
      const deliveryAddress = form.deliveryAddress.value;
      const requestedDate = form.deliveryData.value;
      const latitude = form.latitude.value;
      const longitude = form.longitude.value;
      const bookingDate = parcel?.bookingDate || Date.now();
  
      const data = {
        name,
        email,
        phone,
        type,
        weight,
        status,
        receiversName,
        receiversPhone,
        deliveryAddress,
        requestedDate,
        bookingDate,
        latitude,
        longitude,
        price
      };

      updateParcel(data, id)
      .then(toast.success("Successfully updated") && navigate('/dashboard/my-parcels'))
      .catch(err => console.error(err));
      form.reset()
    //   console.log(data);
    }

    if(!parcel) {return <ErrorPage></ErrorPage>}
    return (
      <>
        <section>
          <div className="container max-w-5xl mx-auto">
            <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto lg:p-16">
              <div className="mx-auto lg:py-16">
                <h2 className="mb-4 secondaryHeading text-center font-bold text-gray-900 dark:text-white">
                  Update your parcel
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                    {/* User name */}
                    <div className="grid-cols-3 lg:grid-cols-1">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your name
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

                    {/* User email */}
                    <div className="grid-cols-3 lg:grid-cols-1">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        defaultValue={parcel?.email}
                        readOnly
                        placeholder="Your email"
                        required
                      />
  
                    </div>
                    {/* User email */}

                    {/* User Phone number */}
                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="+8801723423467"
                        defaultValue={parcel?.phone ? parcel.phone : ''}
                        readOnly={parcel?.phone && true}
                        required
                      />
                    </div>
                    {/* User Phone number */}

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

                    {/* Parcel weight */}
                    <div className="w-full">
                      <label
                        htmlFor="parcelWeight"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Parcel weight (kg)
                      </label>
                      <input
                        type="number"
                        name="parcelWeight"
                        id="parcelWeight"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        min={1}
                        placeholder="eg. 1kg"
                        onChange={calculatedPrice}
                        defaultValue={parseInt(parcel?.weight)}
                        required
                      />
                    </div>
                    {/* Parcel weight */}

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

                    {/* Requested Delivery Date */}
                    <div className="grid-cols-3 lg:grid-cols-1">
                      <label
                        htmlFor="deliveryData"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Delivery date
                      </label>
                      <input
                        type="date"
                        name="deliveryData"
                        id="deliveryData"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Parcel delivery date"
                        defaultValue={parcel?.requestedDate}
                        required
                      />
  
                    </div>
                    {/* Requested Delivery Date */}

                    {/* Delivery address Latitude */}
                    <div className="w-full">
                      <label
                        htmlFor="latitude"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Delivery Address Latitude
                      </label>
                      <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        step=".00000000001"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="i.e 21.121365496"
                        defaultValue={parcel?.latitude}
                        required
                      />
                    </div>
                    {/* Delivery address Latitude */}

                    {/* Delivery address longitude */}
                    <div className="w-full">
                      <label
                        htmlFor="longitude"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Delivery address longitude
                      </label>
                      <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        step=".00000000001"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="i.e 21.121365496"
                        defaultValue={parcel?.longitude}
                        required
                      />
                    </div>
                    {/* Delivery address longitude */}

                    
                  </div>
                  <button
                    type="submit"
                    className="primaryButton bordr-2 border mt-5"
                  >
                    Book now (${price? price: parcel?.price})
                  </button>
                </form>
              </div>
            </section>
  
          </div>
        </section>
      </>
    );
  };
  
  export default UpdateParcel;