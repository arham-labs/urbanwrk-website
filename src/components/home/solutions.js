import Image from 'next/image'
import React from 'react'
import SolutionCard from './solutionCard'
import SolutionSlider from './solutionsSlider'

export default function Solutions() {
    return (
        <div>
            <div className='bg-white'>
                <div className='text-center'>
                    <div className='font-medium text-[65px] pb-0'>Solutions</div>
                    <div className='font-kepler text-[65px] text-center pt-0'>for everything you need</div>
                </div>
                <div className='w-[88%] mx-auto py-20'>
                    <SolutionSlider />
                    <SolutionCard />
                </div>
            </div>

        </div>
    )
}
