import React from 'react'
import LocationParkSlider from './locationParkSlider'
import LocationParkSliderMobile from './locationParkSliderMobile'

export default function LocatonPark({ location, data }) {
    return (
        <div>
            <div className='max-md:hidden'>
                <LocationParkSlider location={location} data={data} />
            </div>
            <div className='md:hidden '>
                <LocationParkSliderMobile location={location} data={data} />
            </div>
        </div>
    )
}
