import React from 'react'

import Restaurants from '@/components/locationInside/restaurants'
import Amenities from '@/components/solutionsLanding/amenities'
import LocationSpace from '@/components/locationInside/locationSpace';
import LocationBanner from '@/components/locationInside/locationBanner';
import LocatonPark from '@/components/locationInside/locatonPark';


export default function page() {
  return (
    <>
      <div className='pt-20'>
        <LocationBanner />
      </div>
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20">
        <Restaurants />
      </div>

      <div className="bg-bglight3 ">
        <div className=" px-6 max-w-[1920px] py-20  mx-auto  lg:px-[100px]">
          {/* <LocationAmenities /> */}
        </div>
      </div>

      {/* <LocationCard /> */}
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20  bg-bglight3">
        <Amenities />
      </div>
      {/* <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <Reviews />
      </div> */}
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] ">
        <LocatonPark />
      </div>

      <LocationSpace />

    </>
  )
}
