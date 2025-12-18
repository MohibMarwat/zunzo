const layout2 = () => {
    return (
        <>
            <div className='max-h-screen flex flex-col justify-stretch gap-7 p-2 size-full border-2 border-red-900'>
                {/* <div className="flex max-w-sm"> */}
                <div className='flex px-10 max-h-24 flex-row justify-between items-center size-full rounded-lg border-2 border-red-950'>
                    {/* circle */}
                    <div className='size-16 rounded-full border-2 border-red-950'></div>

                    {/* rectangle */}
                    <div className='flex flex-row justify-evenly items-center h-14 w-80'>
                        <div className='rounded-lg h-10 w-24 border-2 border-red-950'></div>
                        <div className='rounded-lg h-10 w-24 border-2 border-red-950'></div>
                        <div className='rounded-lg h-10 w-24 border-2 border-red-950'></div>
                    </div>
                </div>
                {/* </div> */}
                <div className="flex items-stretch gap-10 grow">
                    <div className='flex flex-col w-60 p-6 gap-2 rounded-lg border-2 border-red-950'>
                        <div className='rounded-lg h-10 border-2 border-red-950'></div>
                        <div className='rounded-lg h-10 border-2 border-red-950'></div>
                        <div className='rounded-lg h-10 border-2 border-red-950'></div>
                        <div className='rounded-lg h-10 border-2 border-red-950'></div>
                        <div className='rounded-lg h-10 border-2 border-red-950'></div>
                    </div>
                    <div className='flex flex-row justify-evenly p-10 gap-10 grow rounded-lg border-2 border-red-950'>
                        <div className='flex flex-col gap-4 grow w-10'>

                            {/* 1 */}
                            <div className='flex flex-row justify-between  p-3 rounded-lg h-20 border-2 border-red-950'>
                                <div className='flex flex-col gap-2'>
                                    <div className='rounded-md h-5 w-24 border-2 border-red-950'></div>
                                    <div className='rounded-md h-5 w-24 border-2 border-red-950'></div>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <div className='size-12 rounded-full border-2 border-red-950'></div>
                                    <div className='size-12 rounded-full border-2 border-red-950'></div>
                                    <div className='size-12 rounded-full border-2 border-red-950'></div>
                                </div>
                            </div>

                            <div className='flex flex-row rounded-lg p-4 grow gap-4 justify-between border-2 border-red-950'>
                                <div className='flex flex-col grow gap-2'>
                                    <div className='rounded-md grow border-2 border-red-950'></div>
                                    <div className='rounded-md grow border-2 border-red-950'></div>
                                    <div className='rounded-md grow border-2 border-red-950'></div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='rounded-md grow h-44 w-16 border-2 border-red-950'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col p-6 grow justify-between rounded-lg border-2 border-red-950'>
                            <div className='rounded-lg h-16 border-2 border-red-950'></div>
                            <div className='flex flex-row justify-center'>
                                <div className='size-24 rounded-full border-2 border-red-950'></div>
                            </div>
                            <div className='rounded-lg h-16 border-2 border-red-950'></div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default layout2
