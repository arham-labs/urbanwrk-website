import React from 'react'
import LocationParkSlider from './locationParkSlider'
import LocationParkSliderMobile from './locationParkSliderMobile'

export default function LocatonPark() {
    return (
        <div>
            <div className='max-md:hidden'>
                <LocationParkSlider />
            </div>
            <div className='md:hidden '>
                <LocationParkSliderMobile />
            </div>
        </div>
    )
}
