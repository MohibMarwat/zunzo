import { FaPersonRunning } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => (
    <>
        <div className=" flex flex-row h-14 justify-between  bg-[#000000] ">
            <div className="flex flex-row justify-stretch items-center p-3 w-52 [&>div]:cursor-pointer text-white">
                <div className="text-3xl p-1"><FaPersonRunning /></div>
                <div className="font-bold text-2xl">Zunzo</div>
            </div>
            <div className="flex flex-row text-sm font-semibold [&>div]:hover:underline underline-offset-4 [&>div]:cursor-pointer justify-around items-center  grow mx-16  text-white">
                <div className="flex flex-row hover:text-[#C3E92D]">
                    <div className="transition hover:underline underline-offset-4 ">HOME</div>
                    <div className="mt-1 ml-1"><MdOutlineKeyboardArrowDown /></div>
                </div>
                <div className="flex flex-row hover:text-[#C3E92D]">
                    <div className="">PAGES</div>
                    <div className="mt-1 ml-1"><MdOutlineKeyboardArrowDown /></div>
                </div>
                <div className="flex flex-row hover:text-[#C3E92D]">
                    <div className="">OURE VENTS</div>
                    <div className="mt-1 ml-1"><MdOutlineKeyboardArrowDown /></div>
                </div>
                <div className="flex flex-row hover:text-[#C3E92D]">
                    <div className="">SHOP</div>
                    <div className="mt-1 ml-1"><MdOutlineKeyboardArrowDown /></div>
                </div>
                <div className="flex flex-row hover:text-[#C3E92D]">
                    <div className="">NEWS</div>
                    <div className="mt-1 ml-1"><MdOutlineKeyboardArrowDown /></div>
                </div>

                <div className="hover:text-[#C3E92D]">CONTACT</div>
            </div>

            <div className="flex flex-row justify-between items-center w-92 p-4  text-white">
                <div className="hover:text-[#C3E92D]"><LuSearch /></div>
                <div className="flex flex-row [&>div]:cursor-pointer hover:text-[#C3E92D]">
                    <div className="mr-2 mt-1 "><FiUser /></div>
                    <div className="text-sm ">Login / Register</div>
                </div>
                <div className="text-xl relative [&>div]:cursor-pointer hover:text-[#C3E92D]">
                    <div className="border-2 flex justify-center items-center  bg-white size-[16px] absolute -top-2 -right-[11px] rounded-full">
                        <span className="text-xs font-bold text-black">
                            0
                        </span>
                    </div>
                    <BsCart2 />
                </div>
                <div className="flex flex-row border-2 transition cursor-pointer delay-90 hover:scale-105 hover:bg-[#a7ca1b] rounded-full h-9 w-24 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D] ">
                    <div className="">Contact Us</div>
                </div>
            </div>

        </div>
    </>
)
export default Navbar