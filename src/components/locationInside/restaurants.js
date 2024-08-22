import Image from 'next/image'
import React from 'react'
import CommonBtnKnowMore from '../home/commonBtnKnowMore'
import ExploreBtn from '../home/exploreBtn'

export default function Restaurants({ data }) {

    return (
        <div className='bg-[#FFF] flex '>

            <div className='w-full mx-auto  flex max-lg:items-center max-lg:justify-center  justify-between max-lg:flex-col max-lg:gap-10'>
                <div className='w-[487px] max-lg:w-full'>

                    <h1 className='text-6xl max-md:text-3xl uppercase'>{data?.locationName}</h1>
                    <div className='text-base  my-4 '>
                        <p className='text-[#7D7C7C] text-xs font-semibold'>CONNECTIVITY</p>
                        <p className='pt-4'>{data.location1}</p>
                        <p>{data.location2}</p>
                    </div>
                    <div className='flex flex-wrap max-md:w-[300px] md:w-full gap-4'>
                        {data?.connectivityAmenities?.map((item, i) => <div className='flex mt-7  items-center justify-center ' key={i}>
                            <Image src={item.img} height={40} width={35} alt='exploreSvg' className='mr-2' />
                            <p className='text-xs  px-1 w-[95px]'>{item.title}</p>
                        </div>)}
                    </div>
                </div>
                <div className='bg-[#F6F4EE] w-1/2 max-lg:w-full max-lg:py-10 '>
                    <div className='flex flex-col justify-center items-center h-full '>
                        <p className='font-medium text-xl'>Want to find your space?</p>
                        <p className='mt-3'>Get in touch with us to know more.</p>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-fit'>
                                <div className='border border-[#747474] my-5 w-full opacity-45  '></div>
                                <p className='text-base'>Call us Mon-Fri - 08:30-18:00       </p>
                                <p className='text-base text-center font-medium'>+91 8399959996</p>
                            </div>

                            {/* <div className="py-8">
                                <ExploreBtn btnName="Share your details" />
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
