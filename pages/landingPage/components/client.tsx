import { SlSocialSpotify } from "react-icons/sl";
import { SiAdidas } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { FaDropbox } from "react-icons/fa";

import { FaRunning } from "react-icons/fa";


const Client = () => (
    <>
        <div className="flex flex-col  justify-stretch pt-14 items-center text-white bg-[#2F2F2F] size-full border-amber-600">
            <div className="">
                <div className="flex flex-col h-20 gap-2">
                    <div className=" ml-10">
                        <div className=" text-sm font-semibold ml-28 text-[#C3E92D] ">OUR CLIENT</div></div>
                    <div className=" text-3xl font-bold">RUNNING IS WHAT WE DO</div>
                </div>
            </div>
            <div className="flex  h-32 justify-between m-8 gap-7 [&>div]:font-semibold [&>div]:bg-[#2A2A2A] [&>div]:hover:scale-105 [&>div]:hover:bg-[#353535] [&>div]:transition [&>div]:delay-90 [&>div]:rounded-2xl [&>div]:flex row [&>div]:justify-center [&>div]:items-center ">
                <div className="flex flex-col w-64">
                    <div className="text-4xl text-[#00C951]"><SlSocialSpotify /></div>
                    <div className="">Spotify</div>
                </div>
                <div className="flex flex-col  w-64">
                    <div className="text-4xl text-[#D1D5DC]"><SiAdidas /></div>
                    <div className="">Vanfaba</div>
                </div>
                <div className="flex flex-col   w-64">
                    <div className="text-4xl text-[#F6339A]"><SiSlack /></div>
                    <div className="">Slack</div>
                </div>
                <div className="flex flex-col  w-64">
                    <div className="text-4xl text-[#05DF72]"><SiShopify /></div>
                    <div className="">Panadoxn</div>
                </div>
            </div>
            <div className="flex h-32  justify-between gap-7 [&>div]:font-semibold [&>div]:bg-[#2A2A2A] [&>div]:hover:scale-105 [&>div]:hover:bg-[#353535] [&>div]:transition [&>div]:delay-90 [&>div]:flex row [&>div]:rounded-2xl [&>div]:justify-center [&>div]:items-center">
                <div className="flex flex-col  w-64">
                    <div className="text-5xl text-[#51A2FF]"><SiNike /></div>
                    <div className="">Barrycr.tce</div>
                </div>
                <div className="flex flex-col  w-64">
                    <div className="text-4xl text-[#00BCFF]"><FaDropbox /></div>
                    <div className="">Barrycr.tce</div>
                </div>
                <div className="flex flex-col  w-64">
                    <div className="text-4xl text-[#C3E92D]"><FaRunning /></div>
                    <div className="">Shangxi</div>
                </div>
                <div className="flex flex-col  w-64">
                    <div className="text-4xl text-[#D1D5DC]"><SiAdidas /></div>
                    <div className="">Vanfaba</div>
                </div>
            </div>
        </div>
    </>
)

export default Client
