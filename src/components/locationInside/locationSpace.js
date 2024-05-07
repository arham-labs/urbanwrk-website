import Image from 'next/image'
import React from 'react'
import ExploreBtn from '../home/exploreBtn'

export default function LocationSpace() {
    return (
        <div>
            <div className='bg-[#F6F4EE] w-full flex gap-[60px] max-lg:hidden'>
                <div className='w-[60%] h-[429px]'>
                    <Image src="/images/locationInside/locationSpace.png" alt='space' height={300} width={300} className='h-full w-full' unoptimized />
                </div>
                <div className='flex items-center '>
                    <div className=''>
                        <h2 className='text-[45px]  '>Find your space </h2>
                        <h2 className='font-kepler text-[53px] leading-[1.2]'>in Mumbai</h2>
                        <p>Leave your mark in some of the most inspiring locations in the city.</p>

                        {/* <div className='border-black border flex px-8 mb-3 mt-8 w-fit'>
                            <button className='text-base bg-transparent  py-1 text-black '>Submit
                            </button>
                            <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                        </div> */}
                        <div className=' mb-3 mt-8'>
                            <ExploreBtn btnName="Submit"/>
                        </div>
                        <p>or call us at <span className='font-semibold'>
                            +91 98765 43210
                        </span></p>
                    </div>

                </div>
            </div>
            <div className='lg:hidden'>
                <div className='bg-[#F6F4EE] w-full flex flex-col '>
                    <div className='w-full h-[429px]'>
                        <Image src="/images/locationInside/locationSpace.png" alt='space' height={300} width={300} className='h-full w-full' unoptimized />
                    </div>
                    <div className='flex items-center px-6 pt-[48px] pb-[64px]'>
                        <div className=''>
                            <h2 className='text-2xl '>Find your space </h2>
                            <h2 className='font-kepler text-[32px] leading-[1.2] '>in Mumbai</h2>
                            <p className='mt-3'>Leave your mark in some of the most inspiring locations in the city.</p>

                            {/* <div className='border-black border flex px-8 mb-3 mt-4 w-fit'>
                            <button className='text-base bg-transparent  py-1 text-black '>Submit
                            </button>
                            <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                        </div> */}
                            <div className='mb-3 mt-4'>
                                <ExploreBtn btnName="Submit" />
                            </div>
                            <p className='pt-3'>or call us at <span className='font-semibold'>
                                +91 98765 43210
                            </span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
