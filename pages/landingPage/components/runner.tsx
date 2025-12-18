import { PiMedalLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { GiRunningShoe } from "react-icons/gi";
const Runner = () => (
    <>
        <div className="flex flex-row justify-evenly items-center border-2 bg-black h-60">
            <div className=" [&>div]:flex row [&>div]:justify-center [&>div]:items-center [&>div]:text-white">
                <div className="">
                    <div className="text-5xl text-[#C3E92D] "><PiMedalLight /></div>
                </div>
                <div className="">
                    <div className="text-3xl font-bold">196</div>
                </div>
                <div className="">
                    <div className="">RUNNING AWARDS</div>
                </div>
            </div>
            <div className=" [&>div]:flex row [&>div]:justify-center [&>div]:items-center [&>div]:text-white">
                <div className="text-5xl m-1 ">
                    <div className="text-[#C3E92D]"><LuUsers /></div>
                </div>
                <div className="m-1">
                    <div className="text-3xl font-bold">2,432</div>
                </div>
                <div className="m-1">
                    <div className="">ACTIVE MEMBERS</div>
                </div>
            </div>
            <div className="[&>div]:flex row [&>div]:justify-center [&>div]:items-center [&>div]:text-white">
                <div className="m-1 ">
                    <div className="text-5xl text-[#C3E92D]"><LuCalendar /></div>
                </div>
                <div className="m-1">
                    <div className="text-3xl font-bold">244</div>
                </div>
                <div className="m-1">
                    <div className="">RUN EVENTS</div>
                </div>
            </div>
            <div className="[&>div]:flex row [&>div]:justify-center [&>div]:items-center [&>div]:text-white">
                <div className="m-1">
                    <div className="text-5xl text-[#C3E92D]"><GiRunningShoe /></div>
                </div>
                <div className="m-1">
                    <div className="text-3xl font-bold">85KM</div>
                </div>
                <div className="m-1">
                    <div className="">MILES RUN</div>
                </div>
            </div>
        </div>
    </>
)

export default Runner
