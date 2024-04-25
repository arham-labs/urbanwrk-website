import Image from 'next/image'
import React from 'react'

export default function Amenities() {
    return (
        <div className='bg-white'>
            <div className='w-[88%] mx-auto py-20'>
                <h2 className='text-[24px]  uppercase font-normal '>AMENITIES</h2>
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
