import { useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { addParcel } from '../../../APIs/parcels';

const BookParcel = () => {
    const {user} = useAuth();
    const [price, setPrice] = useState(0);
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
    console.log(user);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const name = user?.displayName;
      const email = user?.email;
      const phone = form.phone.value;
      const type = form.parcelType.value;
      const weight = form.parcelWeight.value;
      const status = "pending";
      const receiversName = form.receiversName.value;
      const receiversPhone = form.receiversPhone.value;
      const deliveryAddress = form.deliveryAddress.value;
      const deliveryData = form.deliveryData.value;
      const latitude = form.latitude.value;
      const longitude = form.longitude.value;
  
      const data = {name,
        email,
        phone,
        type,
        weight,
        status,
        receiversName,
        receiversPhone,
        deliveryAddress,
        deliveryData,
        latitude,
        longitude,
        price
      };

      addParcel(data)
      .then(toast.success("Booked successfull!"))
      .catch(err => console.error(err));
      form.reset()
      console.log(data);
    }
    return (
      <>
        <section>
          <div className="container max-w-5xl mx-auto">
            <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto lg:p-16">
              <div className="mx-auto lg:py-16">
                <h2 className="mb-4 secondaryHeading text-center font-bold text-gray-900 dark:text-white">
                  Fill up details for your parcel
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
                        defaultValue={user?.displayName}
                        readOnly
                        placeholder="Type product name"
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
                        defaultValue={user?.email}
                        readOnly
                        placeholder="Type product name"
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
                        placeholder="Type product name"
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
                        placeholder="1kg"
                        onChange={calculatedPrice}
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
                        placeholder="+8801723423467"
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
                        defaultValue="1068/1 taltola, post 3000, Dhaka"
                        placeholder="Parcel delivery date"
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
                        required
                      />
                    </div>
                    {/* Delivery address longitude */}

                    
                  </div>
                  <button
                    type="submit"
                    className="primaryButton mt-5"
                  >
                    Book now (${price})
                  </button>
                </form>
              </div>
            </section>
  
          </div>
        </section>
      </>
    );
  };
  
  export default BookParcel;