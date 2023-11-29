import { BsCart4 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { getAuth, updateProfile } from "firebase/auth";
import Container from "../Components/Shared/Container";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";
import HomeBanner from "../Components/Banners/HomeBanner/HomeBanner";
import FeatureCard from "../Components/Cards/FeatureCard";
import PrimaryButton from "../Components/Shared/Buttons/PrimaryButton";


const Home = () => {
    return (
        <>
            {/* Banner section */}
            <HomeBanner></HomeBanner>
            {/* Features section */}
            <Container>
                <div className="dark:bg-gray-900">
                    <div className="mx-auto max-w-screen-xl lg:px-6">
                        <div className="flex gap-5 items-center justify-between">
                            <div className="max-w-screen-md mb-8 lg:mb-10">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text dark:text-white">
                                    Top reasons to choose us
                                </h2>
                                <p className="text-gray-500 sm:text dark:text-gray-400">
                                    Discover the unparalleled benefits of our delivery system. From enhanced parcel safety to lightning-fast deliveries and seamless booking, Mi-12 brings you a cutting-edge experience. Explore our key features that make us the preferred choice for efficient and secure parcel management.
                                </p>
                            </div>
                            <PrimaryButton href="/dashboard" text="Book a parcel"></PrimaryButton>
                        </div>

                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                            <FeatureCard Icon={AiOutlineSafetyCertificate} IconSize={80} title="Safety First" description="Our robust safety measures ensure that your parcels are handled with the utmost care, from pickup to delivery. Trust us with the security of your valuable packages." className="border rounded-lg p-5 space-y-2"></FeatureCard>
                            <FeatureCard Icon={TbTruckDelivery} IconSize={40} title="Super Fast Delivery" description="Experience the thrill of super-fast deliveries. We take pride in our swift and efficient delivery system, ensuring your parcels reach their destination in record time." className="border rounded-lg p-5"></FeatureCard>
                            <FeatureCard Icon={BsCart4} IconSize={40} title="Effortless Booking" description="Booking a parcel has never been easier. Our user-friendly interface allows you to book your parcels effortlessly, saving you time and simplifying the process." className="border rounded-lg p-5"></FeatureCard>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default Home;