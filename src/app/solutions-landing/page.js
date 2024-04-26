import ExploreCard from '@/components/home/ExploreCard'
import Partners from '@/components/home/partners'
import Amenities from '@/components/solutionsLanding/amenities'
import CompareSolutions from '@/components/solutionsLanding/compareSolutions'
import Solutions from '@/components/solutionsLanding/solutions'
import Reviews from "@/components/home/reviews";


import React from 'react'
import SolutionBanner from '@/components/solutionsLanding/solutionBanner'

export default function page() {
    return (
        <>
            <SolutionBanner />
            <Solutions />
            <CompareSolutions />
            <Amenities />
            <ExploreCard />
            <Reviews />
            <Partners />
        </>
    )
}
