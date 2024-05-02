import Image from 'next/image'
import React from 'react'

export default function Amenities() {
    return (
        <div className='bg-white'>
            <div className='mx-auto py-20'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[24px] uppercase font-normal'>AMENITIES</h2>
                    <div className='flex items-center'>
                        <span className='text-base'>View all</span>
                        <Image src="/images/home/explore.svg" height={18} width={20} alt='exploreSvg' className='ml-1' style={{ height: '18px', width: '18px' }} />
                    </div>
                </div>

                <div className='p-2 flex flex-wrap'>
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="p-[110px] ">
                            <Image src="/images/solutionsLanding/amenities1.svg" alt={"img"} width={50} height={50}
                            />
                            <span>Conference rooms</span>
                        </div>))}
                </div>
            </div>
        </div>
    )
}
