import Image from 'next/image'
import React from 'react'

export default function AboutCard() {
    return (

        <div className='w-full mx-auto '>
            <div className='flex  max-md:hidden'>
                <div className='w-[60%] aspect-[16/11]'>
                    <Image src="/images/home/aboutUs.png" height={666} width={683} className="h-full w-full object-cover" alt="aboutUs" />
                </div>
                <div className='w-1/2 flex flex-col justify-center pl-12'>
                    <>
                        <h2 className='font-normal text-6xl pb-8 font-kepler text-black'>Work, your way</h2>
                        <p className='text-base pb-4 font-normal text-black '>We are UrbanWrk. Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy. We make offices come alive- with your purpose, with the power of your dreams, with the dynamic energy of other driven professionals, with the commitment to nurture the planet and with the promise that whether you are a large organisation or a solopreneur, you will always find the space you need to leave your mark.</p>
                    </>
                </div>
            </div>

            <div className='md:hidden'>
                <div className='aspect-[15/16]'>
                    <Image src="/images/home/aboutUs.png" height={360} width={352}  alt="aboutUs" className='h-full w-full' />
                </div>
                <div className=' flex flex-col justify-center  pt-6'>
                    <>
                        <h2 className='font-normal text-3xl pb-8 font-kepler text-black'>Work, your way</h2>
                        <p className='text-sm pb-4 font-normal text-black '>We are UrbanWrk. Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy. We make offices come alive- with your purpose, with the power of your dreams, with the dynamic energy of other driven professionals, with the commitment to nurture the planet and with the promise that whether you are a large organisation or a solopreneur, you will always find the space you need to leave your mark.</p>
                    </>
                </div>
            </div>
        </div>

    )
}
