import Image from 'next/image'
import React from 'react'
import CommonBtnKnowMore from './commonBtnKnowMore'
import ExploreBtn from './exploreBtn'
import LinkButton from '@/common/linkbtn'

export default function UrbanTech() {
    return (
        <div className='bg-white'>
            <div className='  max-lg:hidden'>
                <div className='flex items-center gap-[25px]'>
                    <div className='w-1/2 '>
                        <Image src="/images/home/urbanTech1.png" height={666} width={683} alt="aboutUs" />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center pl-12'>
                        <>
                            <h2 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl '>Integrate the</h2>
                            <h2 className='font-normal text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] pb-6 font-kepler leading-[1.2] '> next gen of work</h2>

                            <p className='text-base pb-6 w-[80%]'>Step into the future of workspaces where technology empowers productivity. Harness our proprietary centralised app and digital platforms that give you unprecedented insights and enhanced convenience.</p>
                            {/* <div className='pt-7 flex'>
                                <div className='  text-dark pr-2'>Book a Demo</div>
                                <Image src="/images/home/explore.svg" height={18} width={18} alt='exploreSvg' className='ml-1' />
                            </div> */}
                            {/* <ExploreBtn btnName={"Know more"}/> */}
                            {/* <LinkButton href="/urbanWrk-tech" title="Know more" /> */}


                        </>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='flex flex-col items-center'>
                    <div className='w-full '>
                        <Image src="/images/home/urbanTech1.png" height={666} width={683} alt="aboutUs" className='w-full'/>
                    </div>
                    <div className=' flex flex-col justify-center pt-10 '>
                        <>
                            <h2 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl '>Integrate the</h2>
                            <h2 className='font-normal  text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] pb-6 font-kepler leading-[1.2] '> next gen of work</h2>

                            <p className='text-base pb-6 w-[80%]'>Step into the future of workspaces where technology empowers productivity. Harness our proprietary centralised app and digital platforms that give you unprecedented insights and enhanced convenience.</p>
                            {/* <div className='pt-7 flex'>
                                <div className='  text-dark pr-2'>Book a Demo</div>
                                <Image src="/images/home/explore.svg" height={18} width={18} alt='exploreSvg' className='ml-1' />
                            </div> */}
                            {/* <CommonBtnKnowMore btnName="Know more" /> */}
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
