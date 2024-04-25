import Image from 'next/image'
import React from 'react'

export default function AboutCard() {
    return (
        <div className='bg-[#F6F4EE]'>
            <div className='w-[88%] mx-auto py-20'>
                <div className='flex items-center'>
                    <div className='w-1/2 aspect-[38/39]'>
                        <Image src="/images/home/aboutUs.png" height={666} width={683} alt="aboutUs" />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center pl-12'> 
                        <>
                            <h1 className='font-medium text-6xl pb-8'>We are UrbanWrk</h1>
                            <p className='text-base pb-4'>Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy.</p>
                            <p className='text-base pb-4'>We make offices come alive- with your purpose, with the power of your dreams, with the dynamic energy of other driven professionals, with the commitment to nurture the planet and with the promise that whether you are a large organisation or a solopreneur, you will always find the space you need to leave your mark.</p>
                            <div className='pt-7'>
                                <button className='py-2 px-[40px] bg-dark text-white'>About Us</button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
