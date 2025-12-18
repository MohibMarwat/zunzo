import { HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";
import { LuFacebook } from "react-icons/lu";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { LiaYoutube } from "react-icons/lia";
import { RxTwitterLogo } from "react-icons/rx";


const Topbar = () => (
    <>
        <div className="flex flex-row p-2 px-14 justify-between  text-black bg-[#C3E92D]">
            <div className="flex flex-row">
                <div className="flex flex-row ">
                    <div className="pr-1 pt-1">
                        <HiOutlineEnvelope />
                    </div>
                    <div className="text-sm">example@gmail.com</div>
                </div>
                <div className="flex flex-row items-center ml-4">
                    <div ><AiOutlineEnvironment /></div>
                    <div className="text-sm">1st Street, Easton, PA 18040 | Chester Country</div>
                </div>
            </div>
            <div className="flex flex-row text-xl [&>div]:cursor-pointer">
                <div className="w-8"><BiLogoInstagram className="hover:text-[#F6339A]" /></div>
                <div className="w-8"><LuFacebook className="hover:text-[#1447E6]" /></div>
                <div className="w-8"><RxTwitterLogo className="hover:text-[#1447E6]" /></div>
                <div className="w-8"><LiaYoutube className="hover:text-[#F6339A]" /></div>
                <div className="w-8"><BiLogoLinkedinSquare className="hover:text-[#1447E6]" /></div>
            </div>


        </div>
    </>
)

export default Topbar