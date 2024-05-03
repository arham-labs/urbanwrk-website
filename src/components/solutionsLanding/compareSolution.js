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
                        <div className='border-black border flex px-8 my-1 h-[36px] w-fit'>

                            <button className='text-base bg-transparent  py-1 text-black '>Explore
                            </button>
                            <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
