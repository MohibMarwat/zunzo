import { MdDoubleArrow } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
const Events = () => (
    <>
        <div className="flex flex-col py-24 px-14 gap-7  bg-[#1B1B1B]">
            <div className=" w-44 text-sm mb-3 font-medium  text-[#C2E72F] tracking-[0.2rem]">RUNNING EVENTS</div>

            <div className="flex flex-row justify-between">
                <div className=" text-white text-2xl font-bold">RUNNING EVENTS COMING UP INCLUDE</div>
                <div className="flex">
                    <div className="text-white mt-2 text-xs"><MdDoubleArrow /></div>
                    <div className="font-bold underline text-white"> View All</div>
                </div>

            </div>
            <div className="flex flex-row [&>div]:h-[256px]  justify-between items-stretch bg-cover bg-center bg-[url(https://www.shutterstock.com/image-photo/athlete-trail-running-desert-landscape-260nw-1323007985.jpg)]">
                <div className="flex">
                    <div className="relative">

                        <div className="absolute z-10 flex flex-col  clip-box w-[350px] h-[256px] gap-1 bg-[#000000] ">
                            <div className="text-[16px] font-semibold mt-10 mx-10 text-white">WOMEN MARATHON EVENT 2024</div>
                            <div className="flex mt-2 mx-10">
                                <div className="mr-1 mt-3 text-xs text-[#C2E72F]"><AiOutlineEnvironment /></div>
                                <div className="text-xs text-white">710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY</div>
                            </div>
                            <div className="flex mx-10">
                                <div className="mt-1 mr-1 text-xs text-[#C2E72F]"><FaCalendarAlt /></div>
                                <div className="text-xs text-white">OCT 20, 2024</div>
                            </div>
                            <div className="flex mx-10">
                                <div className="mr-1 mt-1 text-xs text-[#C2E72F]"><MdOutlineWatchLater /></div>
                                <div className="text-xs text-white">START 06:00 AM - UNTIL FINISH</div>
                            </div>
                        </div>
                        <div className="absolute h-[100px] w-[310px] clip-child-box bottom-0 left-0   flex justify-center items-center bg-[#C3E92D]">
                        </div>
                    </div>
                </div>



                <div className="flex flex-col justify-center items-center bg-[#000000] h-52 w-72">
                    <div className="text-[#C2E72F] text-xl">TICKET</div>
                    <div className="text-5xl text-white font-bold">$95</div>
                    <div className="text-sm text-gray-400">/ Ticket</div>
                    <div className=" mt-6 flex flex-row transition delay-90  hover:bg-[#a7ca1b] rounded h-10 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D]">LEARN MORE</div>
                </div>

            </div>

            <div className="flex flex-row [&>div]:h-[256px]  justify-between items-stretch bg-cover bg-center bg-[url(https://www.shutterstock.com/image-photo/running-athletes-jogging-on-trail-260nw-1273599259.jpg)]">
                <div className="flex">
                    <div className="relative">

                        <div className="absolute z-10 flex flex-col  clip-box w-[350px] h-[256px] gap-1 bg-[#000000] ">
                            <div className="text-[16px] font-semibold mt-10 mx-10 text-white">WOMEN MARATHON EVENT 2024</div>
                            <div className="flex mt-2 mx-10">
                                <div className="mr-1 mt-3 text-xs text-[#C2E72F]"><AiOutlineEnvironment /></div>
                                <div className="text-xs text-white">710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY</div>
                            </div>
                            <div className="flex mx-10">
                                <div className="mt-1 mr-1 text-xs text-[#C2E72F]"><FaCalendarAlt /></div>
                                <div className="text-xs text-white">OCT 20, 2024</div>
                            </div>
                            <div className="flex mx-10">
                                <div className="mr-1 mt-1 text-xs text-[#C2E72F]"><MdOutlineWatchLater /></div>
                                <div className="text-xs text-white">START 06:00 AM - UNTIL FINISH</div>
                            </div>
                        </div>
                        <div className="absolute h-[100px] w-[310px] clip-child-box bottom-0 left-0   flex justify-center items-center bg-[#C3E92D]">
                        </div>
                    </div>
                </div>



                <div className="flex flex-col justify-center items-center bg-[#000000] h-52 w-72">
                    <div className="text-[#C2E72F] text-xl">TICKET</div>
                    <div className="text-5xl text-white font-bold">$95</div>
                    <div className="text-sm text-gray-400">/ Ticket</div>
                    <div className=" mt-6 flex flex-row transition delay-90  hover:bg-[#a7ca1b] rounded h-10 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D]">LEARN MORE</div>
                </div>

            </div>
            {/* <div className="flex flex-row [&>div]:h-[256px]   justify-between items-stretch bg-cover bg-center bg-[url(https://www.shutterstock.com/image-photo/running-athletes-jogging-on-trail-260nw-1273599259.jpg)]">
                <div className="flex">
                    <div className="relative">
                        <div className="absolute z-10 flex flex-col clip-box w-[350px] h-[256px]  gap-1 bg-[#000000]">
                            <div className="text-[16px] font-semibold mt-10 mx-10 text-white">WOMEN MARATHON EVENT 2023</div>
                            <div className="flex mt-2 mx-10">
                                <div className="mr-1 mt-3 text-xs text-[#C2E72F]"><AiOutlineEnvironment /></div>
                                <div className="text-xs text-white ">710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY</div>
                            </div>
                            <div className="flex mx-10">
                                <div className="mt-1 mr-1 text-xs text-[#C2E72F]"><FaCalendarAlt /></div>
                                <div className="text-xs text-white">OCT 20, 2023</div>
                            </div>
                            <div className="flex mx-10">
                                <div className="mr-1 mt-1 text-xs text-[#C2E72F]"><MdOutlineWatchLater /></div>
                                <div className="text-xs text-white">START 06:00 AM - UNTIL FINISH</div>
                            </div>
                            <div className="absolute h-[100px] w-[310px] clip-child-box bottom-0 left-0   flex justify-center items-center bg-[#C3E92D]">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center bg-[#000000] items-center h-52 w-72">
                    <div className="text-[#C2E72F] text-xl ">TICKET</div>
                    <div className="text-5xl font-bold text-white">$45</div>
                    <div className="text-sm text-gray-400">/ Ticket</div>
                    <div className="mt-6 flex flex-row transition delay-90  hover:bg-[#a7ca1b] rounded h-10 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D]">LEARN MORE</div>
                </div>


            </div> */}


        </div>
    </>
)

export default Events
