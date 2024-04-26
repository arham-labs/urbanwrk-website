import Image from 'next/image'
import React from 'react'

export default function SolutionBanner() {
    return (
        <div className='bg-[#F6F4EE]'>
            <div className=' mx-auto my-20'>
                <div className='flex'>
                    <div className='w-1/2 flex justify-center items-center flex-col'>
                        <h2 className='text-[65px] w-[523px] leading-[73px] font-medium'>
                            Find the space that feels truly yours
                        </h2>
                        <div className='w-[523px]'>
                            <p className='w-[443px] pt-6 text-base '>Explore workspaces that speak to your workstyle. From private floors to personal desks in vibrant coworking spaces with the best facilities, we have everything you need to build your dream. Super flexible, with minimum three-month contracts, now there’s nothing stopping you from working towards your dream.</p>
                        </div>

                    </div>
                    <div className='w-1/2'>
                        <Image src="/images/solutionsLanding/banner.png" alt="solution-page" height={732} width={895} className='h-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
