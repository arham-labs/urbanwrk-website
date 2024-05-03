import React from 'react'
import LocationCard from '@/components/locationInside/locationCard'
import Restaurants from '@/components/locationInside/restaurants'
import Amenities from '@/components/solutionsLanding/amenities'
import Reviews from "@/components/home/reviews";
import LocationSpace from '@/components/locationInside/locationSpace';
import LocationBanner from '@/components/locationInside/locationBanner';

export default function page() {
  return (
    <>
    <div className='pt-20'>
      <LocationBanner />
    </div>
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px] py-20">
        <Restaurants />
      </div>
      {/* <LocationCard /> */}
      {/* <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <Amenities />
      </div> */}
      {/* <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <Reviews />
      </div> */}
      {/* <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <LocationSpace />
      </div> */}
    </>
  )
}
