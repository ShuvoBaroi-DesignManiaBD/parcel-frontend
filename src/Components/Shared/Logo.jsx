import { Link } from "react-router-dom";

const Logo = ({width, center}) => {
    return <Link to="/"><img src="https://i.ibb.co/JsxmTm2/logoV2SM.webp" alt="logo" className={`w-[${width}px] mx-${center?"auto":""}`}/></Link>
};

export default Logo;