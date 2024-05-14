import ExploreCard from '@/components/home/ExploreCard'
import Partners from '@/components/home/partners'
import Amenities from '@/components/solutionsLanding/amenities'


import Reviews from "@/components/home/reviews";


import React from 'react'
import SolutionBanner from '@/components/solutionsLanding/solutionBanner'
import CompareSolution from '@/components/solutionsLanding/compareSolution';
import Solutions from '@/components/solutionsLanding/solutions';
import Testimonial from '@/common/testimonial';
import GoodCompany from '@/components/home/goodCompany';
import FormCard from '@/components/home/formCard';
import DataDriven from '@/components/uwTechnology/dataDriven';

export default function page() {
    return (
        <>

            <div className="bg-bglight1 flex justify-center items-center  max-md:pt-16">
                <div className="max-w-[1920px] ">
                    <SolutionBanner />
                </div>
            </div>
          
            <div className="bg-[#FFFFFF] ">
                <div className=" px-6 max-w-[1920px] py-20 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[100px]">
                    <Solutions />
                </div>
            </div>
            <div className='bg-bglight6'>
                <div className="max-w-[1920px] mx-auto ">
                    <CompareSolution />

                </div>
            </div>



            <div className="bg-[#FFFFFF] ">
                <div className=" px-6 max-w-[1920px] pt-20 pb-12 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[120px]">
                    <Amenities noshow={true} />
                </div>
            </div>

            <ExploreCard />
            <div className="bg-bglight4 ">
                <div className="  max-w-[1920px]  mx-auto ">
                    <Testimonial />
                </div>
            </div>
            {/* <div className="bg-bglight1 ">
                <div className=" px-6 max-w-[1920px] pt-20 pb-12 max-md:pt-16  max-md:pb-20 mx-auto 2xl:pl-[160px] 2xl:pr-[140px] lg:pl-[120px] lg:pr-[60px]">

                </div>
            </div> */}

            <GoodCompany />
            <FormCard />

        </>
    )
}
