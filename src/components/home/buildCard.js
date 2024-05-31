import Image from 'next/image'
import React from 'react'
import CommonBtnKnowMore from './commonBtnKnowMore'
import ExploreBtn from './exploreBtn'

export default function BuildCard() {
    return (
        <div className='bg-bglight1'>
                <div className='flex items-center max-lg:hidden '>
                    <div className='w-1/2 flex flex-col justify-center'>
                        <div className='w-[80%]'>
                            <h2 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl  flex flex-wrap '>Build something</h2>
                            <h2 className='font-normal text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] pb-6 font-kepler leading-[1.2]  '> meaningful</h2>
                            <div className='flex  items-center gap-[10px]'>
                                <Image src="images/home/build.svg" alt="build" height={42} width={43} />
                                <p className='text-base font-medium '>India’s first & only IGBC Platinum rated office spaces.</p>
                            </div>
                            <p className='text-base py-4'>When it comes to productivity, we put the planet first. Why? Because research has proven that a work environment that is aligned with its natural environment makes for better, more positive outcome.</p>
                            <div className='pt-2'>
                            {/* <ExploreBtn btnName={"Read more"}/> */}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <Image src="/images/home/buildCard1.png" height={650} width={685} alt="aboutUs" />
                    </div>
                </div>
                <div className='flex items-center flex-col lg:hidden'>
                <div className='w-full'>
                        <Image src="/images/home/buildCard1.png" height={650} width={685} alt="aboutUs" />
                    </div>
                    <div className=' flex flex-col justify-center pt-10'>
                        <div className='w-[100%]'>
                            <h2 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl  flex flex-wrap '>Build something</h2>
                            <h2 className='font-normal text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] pb-6 font-kepler leading-[1.2]'> meaningful</h2>
                            <div className='flex  items-center gap-[10px]'>
                                <Image src="images/home/build.svg" alt="build" height={42} width={43} />
                                <p className='text-base font-medium '>India’s first & only IGBC Platinum rated office spaces.</p>
                            </div>
                            <p className='text-base py-4'>When it comes to productivity, we put the planet first. Why? Because research has proven that a work environment that is aligned with its natural environment makes for better, more positive outcome.</p>
                            <div className='pt-2'>
                                {/* <CommonBtnKnowMore btnName="Read more" /> */}
                            </div>
                        </div>
                    </div>
                   
                </div>
        </div>
    )
}
