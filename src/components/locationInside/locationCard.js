import React from 'react'
import LocationSlider from './locationSlider'

export default function LocationCard() {
    return (
        <div className='bg-[#EFEDE5] my-20'>
            <div className=" max-w-[1920px] pt-20 mx-auto 2xl:pl-[160px] lg:pl-[80px] flex flex-col justify-between">
                <>
                    <p className='w-3/5 my-9 text-2xl font-normal '>Work in an environment designed to inspire. Be a part of a vibrant community of thinkers, creators and global changemakers that have found their space at Peninsula Park at Lower Parel.</p>
                </>
            </div>
            <div className='max-w-[1920px] mx-auto 2xl:pl-[160px] lg:pl-[80px] pb-20'>
                <LocationSlider />
            </div>
        </div>
    )
}

