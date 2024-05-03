import Image from 'next/image'
import React from 'react'

export default function LocationSpaceCardMobile() {
    return (
        <div className='bg-[#FFF] flex'>
            <div className='w-full mx-auto  flex flex-col '>
                <div className=' max-md:w-full'>
                    <Image src="/images/locationInside/locationSpaceCard1.png" alt="location" height={300} width={300}  className='w-full'/>
                </div>
                <div className='bg-[#F6F4EE] w-[350px] max-md:w-full'>
                    <div className='flex flex-col justify-center items-center p-3'>
                        <div className='ml-3'>
                            <p className='font-medium text-2xl '>Peninsula Park</p>
                            <p className='mt-1 text-[#7D7C7C] font-semibold'>Lower Parel</p>
                            <p className='mt-3 font-light'>Parel Station - 5 min walk</p>
                            <p className='mt-0 font-light'>Best for restaurants, commute-friendly</p>
                            <p className='mt-3 font-normal'>A thriving corporate park in the heart of Mumbai.</p>
                            <div class='flex flex-col items-center'>
                                <div class='flex justify-between w-full  '>
                                    <div class='flex mt-7  items-center w-1/2 '>
                                        <Image src="/images/locationInside/locationSpaceCardlogo4.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class='text-xs ml-2  px-2'>Concierge Team </p>
                                    </div>
                                    <div class='flex  mt-7   items-center w-1/2'>
                                        <Image src="/images/locationInside/locationSpaceCardlogo2.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class='text-xs mr-2  px-2'>Cafeteria</p>
                                    </div>
                                </div>
                                <div class='flex justify-between  w-full '>
                                    <div class='flex mt-7  items-center w-1/2'>
                                        <Image src="/images/locationInside/locationSpaceCardlogo3.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class=' mr-2 text-xs x px-2'>Parking</p>
                                    </div>
                                    <div class='flex mt-7  items-center w-1/2'>
                                        <Image src="/images/locationInside/locationSpaceCardlogo1.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class='text-xs mr-2  px-2'>24 x 7 Access</p>
                                    </div>
                                </div>
                            </div>
                            <div className='border-[#747474] border mt-4'></div>
                            <div className='border-black border flex px-8 mb-3 mt-8 w-fit'>
                                <button className='text-base bg-transparent  py-1 text-black '>Explore
                                </button>
                                <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
