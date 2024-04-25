import Image from 'next/image'
import React from 'react'

export default function UrbanTech() {
    return (
        <div className='bg-white'>
            <div className='w-[88%] mx-auto py-20'>
                <div className='flex items-center'>
                    <div className='w-1/2 '>
                        <Image src="/images/home/urbanTech1.png" height={666} width={683} alt="aboutUs" />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center pl-12'>
                        <>
                            <p>URBANWRK TECH</p>
                            <h1 className='font-medium text-6xl pb-8'>Integrate the next gen of work</h1>
                            <p className='text-base pb-4'>Get the best of managed workspace solutions for your owned or leased real estate. Optimise costs, give employees the space to collaborate and the tools to work from more offices across multiple cities.</p>
                            <div className='pt-7'>
                                <button className='py-2 px-[40px] bg-dark text-white'>Book a Demo</button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
