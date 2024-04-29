import React from 'react'
import LocationCard from '@/components/locationInside/locationCard'
import Restaurants from '@/components/locationInside/restaurants'
import Amenities from '@/components/solutionsLanding/amenities'
import Reviews from "@/components/home/reviews";

export default function page() {
  return (
    <>

      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <Restaurants />
      </div>
      <LocationCard />
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <Amenities />
      </div>
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
        <Reviews />
      </div>
    </>
  )
}
