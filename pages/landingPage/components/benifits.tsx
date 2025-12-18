const Benifits = () => (
    <>
        <div className="flex flex-col size-full justify-stretch items-center bg-black">
            <div className="mt-16 border-2 flex flex-col items-center">
                <div className="text-sm mb-3 font-medium  text-[#C2E72F] tracking-[0.2rem]">RUNNING BENEFITS</div>
                <div className=" text-3xl font-bold text-white">BENEFITS OF RUNNING</div>
            </div>
            <div className="flex flex-row m-14 [&>div]:flex-1 [&>div]:p-9 [&>div]:text-center [&>div]:h-72 gap-7  [&>div]:hover:bg-[#353535] [&>div]:transition [&>div]:duration-300  [&>div]:justify-center [&>div]:items-center [&>div]:border [&>div]:border-[#4A5565] [&>div]:border-t-[#C2E72F] [&>div]:border-t-4">
                <div className="flex flex-col [&>div]:mb-4   hover:bg-[#353535]">
                    <div className=" text-5xl font-bold  border-b-2 relative p-4 border-dotted text-[#C2E72F]">01</div>
                    <div className=" text-2xl font-semibold text-white">Be Healthy</div>
                    <div className="text-sm  text-gray-400">Running improves cardiovascular health, strengthens muscles, and helps maintain a healthy weight.</div>
                </div>
                <div className="flex flex-col [&>div]:mb-4">
                    <div className=" text-5xl font-bold relative p-4 border-b-2 border-dotted text-[#C2E72F]">02</div>
                    <div className=" text-2xl font-semibold text-white">Boost Energy</div>
                    <div className=" text-sm  text-gray-400">It increases stamina and energy levels, helping you stay active throughout the day.</div>
                </div>
                <div className="flex flex-col [&>div]:mb-4">
                    <div className=" text-5xl font-bold relative p-4 border-b-2 border-dotted text-[#C2E72F]">03</div>
                    <div className=" text-2xl font-semibold text-white">Improve Mood</div>
                    <div className=" text-sm text-gray-400">Regular running releases endorphins, reducing stress and improving overall mood.</div>
                </div>
                <div className="flex flex-col [&>div]:mb-4">
                    <div className=" text-5xl font-bold relative p-4 border-b-2 border-dotted text-[#C2E72F]">04</div>
                    <div className=" text-2xl font-semibold text-white">Stay Focused</div>
                    <div className=" text-sm text-gray-400">Running enhances focus and concentration, keeping your mind sharp and alert.</div>
                </div>
            </div>
        </div>
    </>
)

export default Benifits