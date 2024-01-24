import { useQuery } from "@tanstack/react-query";
import { getUser, saveUser } from "../../APIs/Auth";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
import { imageUpload } from "../../APIs/utils";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserProfile, updateUserPass } = useAuth();
  console.log(user);
  const { refetch, data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await getUser(user?.email)
      const data = await res.data;
      console.log(data);
      return data;
    },
    initialData: {}
  });
  console.log(profile);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = selectedImage;
    const profilePhoto = image ? await imageUpload(image) : user?.photoURL;
    const name = form.name.value;
    const newPassword = form.newPassword.value;

    // const photo = imageData?.data?.display_url;
    // const userData = { photo, name, email, password, role };

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[_.!@$*=?#-])[A-Za-z\d_.!@$*=?#-]{8,24}$/;

    try {
      await updateUserProfile(name, profilePhoto);
      if (newPassword !== '') {
        if (!regex.test(newPassword)) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Your password must have one uppercase, lowercase & special character!',
          });
        }
        await updateUserPass(newPassword)
      }
    } catch(err) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: err,
      })
    }

    try {
      const photo = profilePhoto;
      const email = user?.email;
      const role = profile?.role;
      const userData = {name, photo, email, role};
      await saveUser(userData)
    } catch(err) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: err,
      })
    }
    return Swal.fire({
      icon: 'success',
      title: 'Update Success',
      text: 'Profile updated successfully.',
  })




    // if (!regex.test(password)) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops!',
    //         text: 'Your password must have one uppercase, lowercase & special character!',
    //     });
    // } else {
    //     try {
    //         // Register the user
    //         await createUserWithEmail(userData);
    //         await saveUser(userData)
    //             .then(navigate('/'))
    //     } catch (error) {
    //         console.error('Error registering user:', error.message);
    //     }
    // }
  };
  return (
    <>
      {/* Card Section */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Profile
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage your name, password and account settings.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Profile photo
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="flex items-center gap-5">
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                    name='profilePhoto'
                    src={selectedImage || user?.photoURL}
                    alt="Profile_photo"
                  />
                  <div className="flex gap-x-2">
                    <div>

                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1={12} x2={12} y1={3} y2={15} />
                        </svg>
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          accept="images/*"
                          className="hidden z-50 appearance-none"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
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
                    defaultValue={(user?.displayName)}
                  />
                </div>
              </div>
              {/* End name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Email
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  defaultValue={profile?.email}
                  readOnly
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="maria@site.com"
                />
              </div>
              {/* End Col */}
              {/* End Col */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Role
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="af-account-full-name"
                    type="text"
                    className="py-2 px-3 pe-11 capitalize block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Your name"
                    defaultValue={(profile?.role)}
                    readOnly
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-password"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Change password
                </label>
              </div>
              {/* End Col */}
              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input
                    type="password"
                    name="newPassword"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter new password"
                  />
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            <div className="mt-5 flex justify-end gap-x-2">
              <input
                type="submit"
                className="primaryButton"
                value="Save changes"
              />
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>

  );
};

export default Profile;