import ExploreCard from '@/components/home/ExploreCard'
import Amenities from '@/components/solutionsLanding/amenities'
import CompareSolutions from '@/components/solutionsLanding/compareSolutions'
import Solutions from '@/components/solutionsLanding/solutions'


import React from 'react'

export default function page() {
    return (
        <>
            <Solutions />
            <CompareSolutions />
            <Amenities />
            <ExploreCard />


        </>
    )
}
