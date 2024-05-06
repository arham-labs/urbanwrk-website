import React from 'react'

import Restaurants from '@/components/locationInside/restaurants'
import Amenities from '@/components/solutionsLanding/amenities'
import LocationSpace from '@/components/locationInside/locationSpace';
import LocationBanner from '@/components/locationInside/locationBanner';
import LocatonPark from '@/components/locationInside/locatonPark';
import Ways from '@/components/about-us/bespoke-office/ways';
import Testimonial from '@/common/testimonial';
import Speciality from '@/common/speciality';
import LocationSpecialtiesCard from '@/components/locationInside/locationSpecialtiesCard';


export default function page() {

  return (
    <>
      <LocationBanner />
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:py-16 ">
        <Restaurants />
      </div>


      <div className='bg-bglight3 '>
        <LocationSpecialtiesCard />
        <div className="px-6  mx-auto 2xl:px-[160px] lg:px-[100px] pb-16 max-md:pb-4   bg-bglight3">
          <Amenities noshow={false} />
        </div>
      </div>


      <div className=" bg-bglight2   mx-auto  ">
        <Ways />
      </div>
      <div className="bg-bglight4 ">
        <div className="  max-w-[1920px] mx-auto ">
          <Testimonial />
        </div>
      </div>
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:pt-16 max-md:pb-8">
        <LocatonPark />
      </div>

      <LocationSpace />

    </>
  )
}
