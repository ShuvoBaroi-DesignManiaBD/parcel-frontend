import { CgArrowLeft, CgArrowRight } from "react-icons/cg"; 
import { Link } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";


const ErrorPage = () => {
    return (
        <>
        <div className="flex flex-col items-center pb-20">
            <Header></Header>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/kX3Nyb6/404-parcel-error.webp" alt="404 error" className="sm:max-w-[550px] mx-auto" />
                <h2 className="primaryHeading text-center mb-5 -mt-16">Oops! Nothing found.</h2>
                <div className="flex gap-5">
                <Link to="/" className="primaryButton flex items-center gap-2 font-semibold"><CgArrowLeft size='22' />Back to home</Link>
                <Link to="/dashboard" className="secondaryButton flex items-center gap-2">Dashboard <CgArrowRight size='22' /></Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;