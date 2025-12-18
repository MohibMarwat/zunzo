import { FaRunning } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

const Endlinks = () => (
    <>
        <div className="flex flex-col py-10  bg-[#000000]">
            <div className="flex flex-row gap-36 mx-17 ">
                <div className="flex flex-col justify-end w-64 ">
                    <div className="flex flex-row gap-2 justify-start items-center h-20">
                        <div className=" text-4xl text-[#C3E92D]"><FaRunning /></div>
                        <div className=" text-2xl font-bold text-[#C3E92D]">Zunzo</div>
                    </div>
                    <div className="flex h-32 text-sm text-gray-300">Welcome to our running community! Discover the joy of running, connect with fitness enthusiasts, and take your journey to the next stride. Let’s run towards a healthier tomorrow together!</div>
                    <div className="flex flex-row gap-1  [&>div]:rounded-full [&>div]:h-10 [&>div]:w-10 [&>div]:justify-center [&>div]:items-center mr-8 mt-2 justify-center">
                        <div className="flex text-[#155DFC] hover:bg-[#155DFC] hover:text-white bg-white border-black"><FaFacebookF /></div>
                        <div className="flex text-[#51A2FF]  hover:bg-[#50A2FF] hover:text-white bg-white border-black"><IoLogoTwitter /></div>
                        <div className="flex text-[#F6339A] bg-white hover:bg-[#F6339A] hover:text-white border-black"><FaInstagram /></div>
                        <div className="flex text-[#1447E6] bg-white hover:bg-[#1447E6] hover:text-white border-black"><FaLinkedinIn /></div>
                        <div className="flex text-[#FB2C36] bg-white hover:bg-[#FB2C36] hover:text-white border-black"><FaYoutube /></div>
                    </div>
                </div>
                <div className="flex flex-col justify-end gap-3 items-center">
                    <div className=" h-10 text-2xl font-semibold text-white">Quick Links</div>
                    <div className=" h-7 font-semibold text-gray-300">About Us</div>
                    <div className=" h-7 font-semibold text-gray-300">Our Events</div>
                    <div className=" h-7 font-semibold text-gray-300">Latest News</div>
                    <div className=" h-7 font-semibold text-gray-300">Contact Us</div>
                </div>
                <div className="flex flex-col justify-end items-center gap-3">
                    <div className=" h-10 text-2xl font-semibold  text-white">Pages</div>
                    <div className=" h-7 font-semibold text-gray-300">Home</div>
                    <div className=" h-7 font-semibold text-gray-300">Shop</div>
                    <div className=" h-7 font-semibold text-gray-300">My Account</div>
                    <div className=" h-7 font-semibold text-gray-300">Wishlist</div>
                </div>
                <div className="flex flex-col justify-end">
                    <div className=" h-10 text-2xl font-semibold text-white">Newsletter</div>
                    <div className=" h-20">
                        <div className="flex mt-4 h-16 w-44 ">
                            <div className="mr-1 mt-3 text-2xl text-[#C2E72F]"><FaPhoneAlt /></div>
                            <div className="flex flex-col mt-1">
                                <div className="text-sm text-gray-300">Need Help? 24/7</div>
                                <div className="text-xl font-bold text-white">+92 345 6789</div></div>
                        </div>
                    </div>
                    <div className=" h-16 ">
                        <div className="flex  h-14 w-56">
                            <div className="mr-1 mt-3 text-2xl  text-[#C2E72F]"><AiOutlineEnvironment /></div>
                            <div className="text-sm  text-gray-300 mt-2">1st Street, Easton, PA 18040 |
                                Chester Country</div>
                        </div>
                    </div>

                    {/* <form className="flex flex-row focus-within:ring-2 focus-within:ring-[#c3e92d]  h-10 [&>div]:flex [&>div]:justify-center [&>div]:items-center "> */}
                    <form className="flex w-full h-12 items-center bg-gray-800 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#c3e92d] transition">
                        <input className="p-4 w-44 text-[#828892] text-sm bg-[#1E2939]" placeholder="Your Email Address" />
                        <div className="flex justify-center items-center w-14 h-12 rounded-r-md hover:bg-[#B0D42D] bg-[#C3E92D]"><FaLocationArrow /></div>
                    </form>
                </div>
            </div>
            <div className="flex flex-row mx-16 h-8 justify-between border-t-1 mt-10 border-gray-500  ">
                <div className="w-80 text-sm  text-[#828892]">© 2025 Zunzo Running Club. All rights reserved.</div>
                <div className="">
                    <div className="w-52 text-sm pl-8 text-[#828892]">About
                        |
                        My Account
                        |
                        Shop</div></div>
            </div>
        </div>
    </>
)

export default Endlinks