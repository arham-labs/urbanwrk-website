import Image from 'next/image'
import React from 'react'

export default function BuildCard() {
    return (
        <div className='bg-[#F6F4EE]'>
            <div className='w-[88%] mx-auto py-20'>
                <div className='flex items-center '>
                    <div className='w-1/2 flex flex-col justify-center'>
                        <div className='w-[475px]'>
                            <h1 className='font-medium text-6xl pb-8'>Build something meaningful</h1>
                            <p className='text-base pb-4'>LEED & WELL Certified Office Spaces</p>
                            <p className='text-base pb-4'>When it comes to productivity, we put the planet first. Why? Because research has proven that a work environment that is aligned with its natural environment makes for better, more positive outcome. Our design philosophy integrates natural elements into our workspaces through biophilic design to reduce your ecological footprint and enhance productivity, boost mood, and foster a sense of well-being every time you walk in.</p>
                            <div className='pt-7'>
                                <button className='py-2 px-[40px] bg-dark text-white'>Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 pl-10'> {/* Added left padding here */}
                        <Image src="/images/home/aboutUs.png" height={614} width={685} alt="aboutUs" />
                    </div>
                </div>
            </div>
        </div>
    )
}
