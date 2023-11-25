import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="border-t border-gray-200">
            <div className="container mx-auto flex flex-col">
                <div className="flex py-[60px] justify-between items-center">
                    <div className="w-[180px]">
                        <img src="https://i.ibb.co/JsxmTm2/logoV2SM.webp" alt="logo" className="" />
                    </div>
                    <ul className="flex text font-medium gap-6">
                        <li>
                            <a
                                href="#"
                                className="_ryfipzijJEI18CFfJIm _5zvlMLkN1qETxEl3IhT _E9KGvKirzYW8mru5zHb"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="_ryfipzijJEI18CFfJIm _5zvlMLkN1qETxEl3IhT _E9KGvKirzYW8mru5zHb"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="_ryfipzijJEI18CFfJIm _5zvlMLkN1qETxEl3IhT _E9KGvKirzYW8mru5zHb"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="_5zvlMLkN1qETxEl3IhT">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <form>
                        <div className="flex flex-row justify-between items-center gap-0 rounded-[8px]">
                            <div className="flex gap-2 items-stretch justify-start px-3 py-2.5 border-2 rounded-l-md h-full border-gray-200">
                            <IoIosMail size={24} className="text-gray-500"/>
                            <input
                                type="text"
                                className="bg-transparent w-full rounded-lg text-sm focus:border-0 focus:outline-none"
                                name="subscribe"
                                placeholder="Enter your email"
                            />
                            </div>
                            <button
                                className="primaryButton rounded-l-none border-2 border-primary"
                                href="#"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>

                </div>
                <hr className="" />
                <div className="flex justify-between py-3">
                    <span className="text-sm">
                        © {currentYear}{" "}
                        <a href="/" className="font-semibold">
                            Parcel
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex gap-3 text-gray-600">
                        <FaFacebook></FaFacebook>
                        <FaLinkedin></FaLinkedin>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;