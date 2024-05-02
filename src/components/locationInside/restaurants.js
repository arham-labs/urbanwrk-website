import Image from 'next/image'
import React from 'react'

export default function Restaurants() {
    return (
        <div className='bg-[#FFF] flex'>
   
            <div className='w-full mx-auto pt-20 flex justify-between '>
                <div>
                    <div>
                        <div className='mb-[5px]'>
                            <span className='text-2xl '>GREAT RESTAURANTS NEARBY</span>
                            <div className='bg-primary h-[3p] border border-primary mt-1 w-[355px]'></div>
                        </div>

                        <div className='text-6xl mt-6'>Peninsula Park </div>
                    </div>
                    <div className='text-base font-light mt-10 '>
                        <p>CONNECTIVITY</p>
                        <p>Western Line - Lower Parel: 8 minute walk</p>
                        <p>Harbour Line - Parel:  5 minutes walk</p>
                        <p>Senapati Bapat Marg: 5 minutes walk</p>
                    </div>
                    <p className='text-lg font-normal'>Buzzing workplace in the heart of Mumbai. </p>
                    <div className='flex mt-1  '>
                        <p className='text-base'>Explore Workspace Solutions</p>
                        <Image src="/images/home/explore.svg" height={24} width={18} alt='exploreSvg' className='ml-1' />
                    </div>
                </div>
                <div className='bg-[#F6F4EE] w-[398px]'>
                    <div className='flex flex-col justify-center items-center p-4'>
                        <div className='ml-5'>
                            <p>Want to know what it’s like to work at Peninsula Park?</p>
                            <p className='mt-5'>Call our on-site support</p>
                            <p className='mt-1'>Mon-Fri - 08:30-18:00</p>
                            <p className='mt-1'>Seema Singh</p>
                            <p className='mt-1'>+91 98765 43210</p>
                            <p className='mt-1'>Sales: +44 (0) 203 923 7090</p>
                            <div className='flex my-5  '>
                                <p className='text-base'>Make an Enquiry</p>
                                <Image src="/images/home/explore.svg" height={24} width={18} alt='exploreSvg' className='ml-1' />
                            </div>

                            <div className='border-[#747474] border'></div>

                            <div class='flex flex-col items-center'>
                                <div class='flex justify-between w-full  '>
                                    <div class='flex mt-7  items-center w-1/2 '>
                                        <Image src="/images/locationInside/hvac.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class='text-xs ml-2  px-2'>Enhanced HVAC standards</p>
                                    </div>
                                    <div class='flex  mt-7   items-center w-1/2'>
                                        <Image src="/images/locationInside/group.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class='text-xs mr-2  px-2'>WELL Certified</p>
                                    </div>
                                </div>
                                <div class='flex justify-between  w-full '>
                                    <div class='flex mt-7  items-center w-1/2'>
                                        <Image src="/images/locationInside/wheelChair.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class=' mr-2 text-xs x px-2'>Wheelchair accessible</p>
                                    </div>
                                    <div class='flex mt-7  items-center w-1/2'>
                                        <Image src="/images/locationInside/parking.svg" height={40} width={35} alt='exploreSvg' className='ml-1' />
                                        <p class='text-xs mr-2  px-2'>Parking</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
