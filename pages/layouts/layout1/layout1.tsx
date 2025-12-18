const layout1 = () => {
    return (
        <>
            {/* <div className='flex   text-black bg-[#CFC8C3] min-h-screen'>
        hello world
      </div> */}

            <div className='max-h-screen flex flex-row justify-stretch gap-7 p-4 size-full border-2 border-red-900 text-white font-bold'>
                <div className='max-h-screen flex flex-row justify-stretch gap-5 p-11 size-full rounded-lg border-2 border-red-950 text-white font-bold'>
                    <div className='flex flex-col grow items-center rounded-lg border-2 border-spacing-3 border-blue-950'>
                        <div className='bg-[#87eb66] m-7 w-52 grow border-2 border-blue-950 rounded-lg flex flex-col justify-center items-center '>
                            <span >B</span>
                        </div>
                        <div className='bg-[#66c8eb] w-52 m-7 grow border-2 border-blue-950 rounded-lg flex flex-col justify-center items-center '>
                            <span >C</span>
                        </div>
                        {/* <div>
                    <button className="p-2 pl-3 pr-3 font-semibold rounded-full bg-[#00B8DB] text-white">Save Changes</button>
                    </div> */}
                    </div>
                    {/* <div className='flex flex-row size-14 p-60 mt-9 justify-center items-center grow rounded-lg border-2 border-spacing-3 border-blue-950'> */}
                    <div className='size-0 bg-[#eb9e66] border-2 w-96 h-auto border-blue-950 rounded-lg flex flex-col justify-center items-center'>A
                        {/* <span className='border-2 border-red-950'>A</span> */}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default layout1
