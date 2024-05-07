import Testimonial from '@/common/testimonial'
import FormCard from '@/components/home/formCard'
import BetterSpace from '@/components/uwTechnology/betterSpace'
import DataDriven from '@/components/uwTechnology/dataDriven'
import TechnologyBanner from '@/components/uwTechnology/technologyBanner'
import React from 'react'

export default function page() {
    return (
        <div>
            <TechnologyBanner />
            <DataDriven />
            <BetterSpace />
            <Testimonial />
            <FormCard />
        </div>
    )
}
