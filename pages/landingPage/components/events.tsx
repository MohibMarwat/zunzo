import { MdDoubleArrow } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
const Events = () => (
    <>
        <div className="flex flex-col py-20 px-10 gap-4  bg-[#1B1B1B]">
            <div className=" w-44 text-sm mb-3 font-medium  text-[#C2E72F] tracking-[0.2rem]">RUNNING EVENTS</div>

            <div className="flex flex-row justify-between">
                <div className=" text-white text-3xl font-bold">RUNNING EVENTS COMING UP INCLUDE</div>
                <div className="flex">
                    <div className="text-white mt-2 text-xs"><MdDoubleArrow /></div>
                    <div className="font-bold underline text-white"> View All</div>
                </div>

            </div>
            <div className="flex flex-row border bg-[#000000] [&>div]:h-56 border-gray-700 justify-between items-stretch grow bg-cover bg-center bg-[url(https://www.shutterstock.com/image-photo/athlete-trail-running-desert-landscape-260nw-1323007985.jpg)]">
                <div className="flex flex-col w-72 gap-1">
                    <div className="text-xl font-bold text-white">Women Marathon Event 2024</div>
                    <div className="flex">
                        <div className="mr-1 mt-3 text-xs text-[#C2E72F]"><AiOutlineEnvironment /></div>
                        <div className="text-sm text-white">710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY</div>
                    </div>
                    <div className="flex">
                        <div className="mt-1 mr-1 text-xs text-[#C2E72F]"><FaCalendarAlt /></div>
                        <div className="text-white">OCT 20, 2024</div>
                    </div>
                    <div className="flex">
                        <div className="mr-1 mt-1 text-xs text-[#C2E72F]"><MdOutlineWatchLater /></div>
                        <div className="text-white">START 06:00 AM - UNTIL FINISH</div>
                    </div>
                </div>



                <div className="flex flex-col justify-center items-center h-52 w-72">
                    <div className="text-[#C2E72F] text-xl">TICKET</div>
                    <div className="text-5xl text-white font-bold">$95</div>
                    <div className="text-sm text-gray-400">/ Ticket</div>
                    <div className=" mt-6 flex flex-row transition delay-90  hover:bg-[#a7ca1b] rounded h-10 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D]">LEARN MORE</div>
                </div>

            </div>
            <div className="flex flex-row [&>div]:h-56 bg-[#000000] border border-gray-700 justify-between items-stretch  bg-center bg-[url(https://www.shutterstock.com/image-photo/running-athletes-jogging-on-trail-260nw-1273599259.jpg)]">
                <div className="flex flex-col w-72 gap-1">
                    <div className="text-xl font-bold text-white">Women Marathon Event 2023</div>
                    <div className="flex">
                        <div className="mr-1 mt-3 text-xs text-[#C2E72F]"><AiOutlineEnvironment /></div>
                        <div className="text-sm text-white ">710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY</div>
                    </div>
                    <div className="flex">
                        <div className="mt-1 mr-1 text-xs text-[#C2E72F]"><FaCalendarAlt /></div>
                        <div className="text-white">OCT 20, 2023</div>
                    </div>
                    <div className="flex">
                        <div className="mr-1 mt-1 text-xs text-[#C2E72F]"><MdOutlineWatchLater /></div>
                        <div className="text-white">START 06:00 AM - UNTIL FINISH</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-52 w-72">
                    <div className="text-[#C2E72F] text-xl ">TICKET</div>
                    <div className="text-5xl font-bold text-white">$45</div>
                    <div className="text-sm text-gray-400">/ Ticket</div>
                    <div className="mt-6 flex flex-row transition delay-90  hover:bg-[#a7ca1b] rounded h-10 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D]">LEARN MORE</div>
                </div>


            </div>


        </div>
    </>
)

export default Events
