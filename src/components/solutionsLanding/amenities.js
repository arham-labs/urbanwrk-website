import Image from 'next/image'
import React from 'react'
import AmenitiesSlider from './amenitiesSlider'
import AmenitiesSliderMobile from './amenitiesSliderMobile'

export default function Amenities() {
    return (
        <div className='bg-white'>
            <div className='mx-auto '>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex justify-between w-full'>
                        <h2 className='text-[24px] max-md:text-[20px] uppercase font-normal'>AMENITIES</h2>
                    </div>
 
                </div>
                <div className='max-md:hidden'>
                    <AmenitiesSlider />
                </div>
                <div className='md:hidden '>
                    <AmenitiesSliderMobile />
                </div>
            </div>
        </div>
    )
}