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

export default function page() {
    return (
        <>

            <div className="bg-bglight1 flex justify-center items-center pt-20">
                <div className="max-w-[1920px] ">
                    <SolutionBanner />
                </div>
            </div>
            <div className="bg-[#FFFFFF] ">
                <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
                    <Solutions />
                </div>
            </div>
            <CompareSolution />
            {/* <Solutions /> */}
            {/* <CompareSolutions /> */}
            <div className="bg-[#FFFFFF] ">
                <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
                    <Amenities noshow={true}/>
                </div>
            </div>

            <ExploreCard />
            <div className="bg-bglight4 ">
                <div className="  max-w-[1920px] py-20  mx-auto ">
                    <Testimonial />
                </div>
            </div>
            <div className="bg-bglight1 ">
                <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
                    <GoodCompany />
                </div>
            </div>
            <div className="bg-white ">
                <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
                    <FormCard />
                </div>
            </div>
            {/* <Reviews /> */}
            {/* <Partners /> */}
        </>
    )
}
