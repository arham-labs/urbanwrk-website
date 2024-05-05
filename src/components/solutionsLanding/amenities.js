import Image from 'next/image'
import React from 'react'
import AmenitiesSlider from './amenitiesSlider'
import AmenitiesSliderMobile from './amenitiesSliderMobile'

export default function Amenities({noshow}) {
    return (
       
            <div className='mx-auto max-w-[1920px]'>
                {noshow && <div className='flex flex-col justify-between items-center'>
                    <div className='flex justify-between w-full'>
                        <h2 className='text-[24px] max-md:text-[20px] uppercase font-normal'>AMENITIES</h2>
                    </div>
 
                </div>}
                <div className='max-md:hidden'>
                    <AmenitiesSlider />
                </div>
                <div className='md:hidden mb-6'>
                    <AmenitiesSliderMobile />
                </div>
            </div>
      
    )
}
