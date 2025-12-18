const Course = () => (
    <>
        <div className="flex flex-col py-16 justify-between items-center bg-black">
            <div className="flex flex-col justify-between items-center mt-10 ">
                <div className=" h-5 text-sm  font-semibold text-[#C2E72F] tracking-[0.1rem]">COURSE / TUTORIAL</div>
                <div className=" h-8 text-white text-2xl font-bold">RUNNING COURSES, ARTICLES & VIDEOS</div>
                <div className=" h-7 text-white text-2xl font-bold">TUTORIALS ABOUT RUNNING</div>
            </div>

            <div className="flex flex-row gap-8 mt-5 ">
                <div className="flex flex-col">
                    <div className="flex  h-56 border-b-blue-300 bg-cover bg-center bg-[url(https://articles-1mg.gumlet.io/articles/wp-content/uploads/2017/05/rsz_shutterstock_547520209.jpg?compress=true&quality=80&w=640&dpr=2.6)]"></div>
                    <div className="flex  h-9 w-56 mt-1 text-white text-xl font-semibold border-b-blue-300">Embracing the Journey</div>
                    <div className="flex  h-20 w-80 text-gray-400 border-b-blue-300">Unveiling the life-changing benefits of running — discover how consistency and motivation transform your lifestyle.</div>
                    <div className="flex   flex-row transition delay-90 hover:bg-[#a7ca1b] rounded h-9 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D]">READ MORE</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex  h-56 border-b-blue-300 bg-cover bg-center bg-[url(https://entail.insidetracker.com/en-assets/insidetracker/fit-in/700x700/shutterstock_1475959124-1705929131134.jpg)]"></div>
                    <div className="flex  h-9 w-56 mt-1 text-white text-xl font-semibold border-b-blue-300">Perfect Your Technique</div>
                    <div className="flex  h-20 w-80 text-gray-400 border-b-blue-300">Learn proper form, breathing, and stride techniques to enhance performance and reduce injury risk.</div>
                    <div className="flex   flex-row transition delay-90 hover:bg-[#a7ca1b] rounded h-9 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D] border-b-blue-300">READ MORE</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex  h-56 border-b-blue-300 bg-cover bg-center bg-[url(https://hips.hearstapps.com/hmg-prod/images/young-women-runners-rounding-turn-on-track-royalty-free-image-656982959-1536591323.jpg?resize=640:*)]"></div>
                    <div className="flex  h-9 w-56 mt-1 text-white text-xl font-semibold border-b-blue-300">The Runner’s Mindset</div>
                    <div className="flex  h-20 w-80 text-gray-400  border-b-blue-300">Running is more than a sport — it’s mental discipline. Explore the power of focus, consistency, and goal setting.</div>
                    <div className="flex  flex-row transition delay-90 hover:bg-[#a7ca1b] rounded h-9 w-32 font-semibold text-sm justify-center items-center text-black bg-[#C3E92D] border-b-blue-300">READ MORE</div>
                </div>
            </div>
        </div>
    </>
)

export default Course
