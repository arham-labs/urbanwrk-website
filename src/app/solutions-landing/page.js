import ExploreCard from '@/components/home/ExploreCard'
import Partners from '@/components/home/partners'
import Amenities from '@/components/solutionsLanding/amenities'


import Reviews from "@/components/home/reviews";


import React from 'react'
import SolutionBanner from '@/components/solutionsLanding/solutionBanner'
import Solutions from '@/components/home/solutions';
import CompareSolution from '@/components/solutionsLanding/compareSolution';

export default function page() {
    return (
        <>

            <div className="bg-bglight1 flex justify-center items-center">
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
                    <Amenities />
                </div>
            </div>

            <ExploreCard />
            {/* <Reviews /> */}
            {/* <Partners /> */}
        </>
    )
}
