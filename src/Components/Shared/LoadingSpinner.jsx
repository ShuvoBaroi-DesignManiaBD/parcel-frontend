import { Spinner } from "@material-tailwind/react";
const LoadingSpinner = () => {
    return (
        <div className="w-full mx-auto h-[70vh] flex justify-center items-center gap-8">
            <Spinner color="orange" className="h-12 w-12 text-primary" ></Spinner>
        </div>
    );
};

export default LoadingSpinner;