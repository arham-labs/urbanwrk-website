import React from 'react'

import Restaurants from '@/components/locationInside/restaurants'
import Amenities from '@/components/solutionsLanding/amenities'
import LocationSpace from '@/components/locationInside/locationSpace';
import LocationBanner from '@/components/locationInside/locationBanner';
import LocatonPark from '@/components/locationInside/locatonPark';
import Ways from '@/components/about-us/bespoke-office/ways';
import Testimonial from '@/common/testimonial';
import Speciality from '@/common/speciality';


export default function page() {
  const specilatiesData = [
    { title: "Your modern, tailormade office", desc: "From one desk to a dedicated floor, you can create your space the way you want." },
    { title: "With 5-Star hospitality", desc: "Enjoy on-site support team, coffee bar, fully-stocked pantry, exclusive access to WellnessWrk Gym, BuzzWrk Café and more." },
    { title: "Made with your blueprint", desc: "Create a home for your brand based on your vision with our design and interiors solution." },
    { title: "Uplifting spaces", desc: "Work in a visually stunning environment where form meets function." },
    { title: "Feed your curiosity", desc: "Attend exclusive member events and panel talks or sign up for courses and workshops from India’s finest business minds." },

  ]
  return (
    <>
      <div>
        <LocationBanner />
      </div>
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20">
        <Restaurants />
      </div>
      <Speciality data={specilatiesData} title="Amenities" />
      <div className="px-6  mx-auto 2xl:px-[160px] lg:px-[100px] pb-20  bg-bglight3">
        <Amenities noshow={false}/>
      </div>

      <div className=" bg-bglight2   mx-auto  ">
        <Ways />
      </div>
      <div className="bg-bglight4 ">
        <div className="  max-w-[1920px] mx-auto ">
          <Testimonial />
        </div>
      </div>
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] ">
        <LocatonPark />
      </div>

      <LocationSpace />

    </>
  )
}
