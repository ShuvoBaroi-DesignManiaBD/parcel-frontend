import { Spinner } from "@material-tailwind/react";
const LoadingSpinner = () => {
    return (
        <div className="h-screen flex justify-center items-center gap-8">
            <Spinner color="orange" className="h-12 w-12 text-primary" ></Spinner>
        </div>
    );
};

export default LoadingSpinner;