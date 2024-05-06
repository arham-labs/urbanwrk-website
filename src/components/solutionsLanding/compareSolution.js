import Image from 'next/image'
import React from 'react'
import ExploreBtn from '../home/exploreBtn'

export default function CompareSolution() {

    return (
        <div className='flex max-lg:flex-col '>
            <div className='w-1/2 max-lg:w-full max-lg:h-[220px] lg:h-[383px]'>
                <Image src="/images/solutionsLanding/compareSolution.png" alt="compare solution" height={383} width={837} className='w-full h-full' />
            </div>

            <div className=' max-lg:w-full w-1/2  flex flex-col lg:justify-center lg:items-center  max-lg:pt-10 max-lg:pb-16 max-lg:px-6'>
                <div className=' flex flex-col lg:items-center lg:justify-center'>
                    <h2 className='text-[45px] max-lg:text-[28px] font-normal  '>Compare our solutions</h2>
                    <div className='w-full flex  justify-end max-lg:justify-start max-lg:pt-1'>
                        <div className='pt-5'>
                            <ExploreBtn btnName={"Explore"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
