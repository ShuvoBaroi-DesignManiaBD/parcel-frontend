import Container from "../../Shared/Container";
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <section className="py-20 BannerBg">
            <Container>
                <div className="text-center text-white w-full lg:w-[45vw] mx-auto space-y-3">
                    <h2 className="primaryHeading text-7xl leading-tight">Welcome! Emjoy Swift and Secure Delivery</h2>
                    <p className="px-10">Experience unparalleled speed and security in parcel delivery. Our commitment to timely deliveries ensures that your packages reach their destination on schedule, every time.</p>
                </div>
                    {/* Subscribe */}
                    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-5 mx-auto">
                        <div className="max-w-xl text-center mx-auto">
                            <form>
                                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            id="hero-input"
                                            name="hero-input"
                                            className="py-4 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <button
                                        className="w-full sm:w-auto whitespace-nowrap py-4 px-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none"
                                        href="#"
                                    >
                                        Search delivery man
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Subscribe */}

            </Container>
        </section>
    );
};

export default HomeBanner;