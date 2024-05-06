import Testimonial from '@/common/testimonial'
import FormCard from '@/components/home/formCard'
import Grade from '@/components/sustainability/grade'
import TechnologyBanner from '@/components/uwTechnology/technologyBanner'
import React from 'react'

export default function page() {
    return (
        <div>
            <TechnologyBanner />
            <Grade />
            <Testimonial />
            <FormCard />
        </div>
    )
}
