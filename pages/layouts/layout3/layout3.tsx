const layout3 = () => {
    return (
        <>
            <div className='max-h-screen flex flex-col justify-stretch gap-7 p-2 size-full border-2 border-red-900'>
                <div className='flex flex-row size-full gap-7'>
                    <div className='flex flex-col gap-2 p-8 w-32  rounded-lg border-2 border-yellow-500 '>
                        <div className='size-12 rounded-full border-2 border-red-950'></div>
                        <div className='size-12 rounded-full border-2 border-red-950'></div>
                        <div className='size-12 rounded-full border-2 border-red-950'></div>
                        <div className='size-12 rounded-full border-2 border-red-950'></div>
                        <div className='size-12 rounded-full border-2 border-red-950'></div>
                    </div>
                    <div className='flex flex-col size-full gap-7'>
                        <div className='h-24'>
                            <div className='flex flex-row size-full px-4 justify-between items-center rounded-lg border-2 border-green-950'>
                                <div className='size-12 rounded-full border-2 border-red-950'></div>
                                <div className='flex flex-col size-14 gap-1 justify-center'>
                                    <div className='h-3 rounded-lg bg-black border-2 border-red-950'></div>
                                    <div className='h-3 rounded-lg bg-black border-2 border-red-950'></div>
                                    <div className='h-3 rounded-lg bg-black border-2 border-red-950'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row grow gap-7 p-7 rounded-lg border-2 border-green-950'>
                            <div className='flex flex-col gap-4 w-52 rounded-lg border-2 p-4 border-green-950'>
                                <div className='rounded-lg h-10 border-2 border-red-950'></div>
                                <div className='rounded-lg h-10 border-2 border-red-950'></div>
                                <div className='rounded-lg h-10 border-2 border-red-950'></div>
                            </div>
                            <div className='flex flex-row grow gap-7 p-7 rounded-lg border-2 border-green-950'>
                                <div className='w-20 rounded-lg border-2 border-yellow-700'></div>
                                <div className='flex flex-col justify-between w-60 grow'>
                                    <div className='h-16 rounded-lg border-2 border-yellow-700'></div>
                                    <div className='flex flex-row h-32 grow justify-around py-2'>
                                        <div className='w-20 rounded-lg border-2 border-yellow-700'></div>
                                        <div className='flex flex-col justify-center items-center w-52 rounded-lg border-2 border-yellow-700'>
                                            <div className='size-28 rounded-full border-2 border-red-950'></div>
                                        </div>
                                        <div className='w-20 rounded-lg border-2 border-yellow-700'></div>

                                    </div>
                                    <div className='h-16 rounded-lg border-2 border-yellow-700'></div>
                                </div>
                                <div className='w-20 rounded-lg border-2 border-yellow-700'></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default layout3