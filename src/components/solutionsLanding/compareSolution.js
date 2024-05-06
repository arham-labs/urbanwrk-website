import Image from 'next/image'
import React from 'react'
import ExploreBtn from '../home/exploreBtn'

export default function CompareSolution() {

    return (
        <div className='flex max-md:flex-col '>
            <div className='w-1/2 max-md:w-full max-md:h-[220px] md:h-[383px]'>
                <Image src="/images/solutionsLanding/compareSolution.png" alt="compare solution" height={383} width={837} className='w-full h-full' />
            </div>

            <div className=' max-md:w-full w-1/2  flex flex-col md:justify-center md:items-center  max-md:pt-10 max-md:pb-16 max-md:px-6'>
                <div className=' flex flex-col md:items-center md:justify-center'>
                    <h2 className='text-[45px] max-md:text-[28px] font-normal  '>Compare our solutions</h2>
                    <div className='w-full flex  justify-end max-md:justify-start max-md:pt-1'>
                        <div className='pt-5'>
                            <ExploreBtn btnName={"Explore"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
