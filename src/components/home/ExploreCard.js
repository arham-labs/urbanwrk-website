import Image from 'next/image'
import React from 'react'
import Dropdown from './dropdown'
import BasicSelect from './dropdown'


export default function ExploreCard() {
    return (
        <div>
            <div className='relative'>
                <div>
                    <Image src="/images/home/exploreCard3.png" height={836} width={422} alt="exploreCard" className='h-[837px] w-full' />
                </div>
                <div className='absolute top-28 inset-x-0 flex justify-center items-center font-medium text-[65px]'>
                    <div >What are you looking for?</div>
                </div>
                <div className='absolute bottom-60 inset-x-0 flex justify-center items-center font-medium text-[65px]'>
                    <p className='text-[30px] text-white w-[40%] text-center'>
                        Leave your mark with office spaces in cities that are,
                        <br className="lg:hidden" />
                        shaping the economy&apos;s next chapter.
                    </p>

                </div>

                <div className='absolute bottom-24 inset-x-0 flex justify-center items-center font-medium text-[65px] '>
                    <div className='bg-bglight1 w-[894px] h-[117px] relative flex justify-between items-center'>
                        <div className='flex-grow flex items-center justify-center'>
                            <BasicSelect />
                        </div>
                        <div className='flex-grow flex items-center justify-center'>
                            <BasicSelect />
                        </div>
                        <div className='flex-grow flex items-center justify-center'>
                            <div className='text-[25px]'>Explore</div>
                            <Image src="/images/home/explore.svg" height={24} width={18} alt='exploreSvg' className='ml-1' />
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
