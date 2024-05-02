import Image from 'next/image'
import React from 'react'

export default function CompareSolution() {

    return (
        <div className='flex max-md:flex-col '>
            <div className='w-1/2 max-md:w-full max-md:h-[220px]'>
                <Image src="/images/solutionsLanding/compareSolution.png" alt="compare solution" height={383} width={837} className='w-full h-full' />
            </div>
            <div className=' max-md:w-full w-1/2 bg-bglight6 flex flex-col md:justify-center md:items-center  max-md:py-14 max-md:px-6'>
                <div className=' flex flex-col md:items-center md:justify-center'>
                    <h2 className='text-[45px] max-md:text-[28px] font-normal  '>Compare our solutions</h2>
                    <div className='w-full flex  justify-end max-md:justify-start max-md:pt-2'>
                        <div className='text-[25px] max-md:text-sm'>Explore</div>
                        <Image src="/images/home/explore.svg" height={18} width={24} alt='exploreSvg' className='ml-1 max-md:w-[15px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
