
"use client"
import React from 'react'
import SolutionSlider from '../home/solutionsSlider'
import SolutionMobileSlider from '../home/solutionMobileSlider'


export default function Solutions() {


    const data = [
        { img: "/images/home/solutionCard1.png", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days." },
        { img: "/images/home/solutionCard2.png", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately." },
        { img: "/images/home/solutionCard3.png", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone." },
        { img: "/images/home/solutionCard4.png", title1: `Events &`, title2: "Shoots", desc: "Tailormade event solutions with hospitality and catering for up to 250 people." },
        { img: "/images/home/solutionCard5.png", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across 10 mn+ sq ft of prime real estate to put your brand on top of minds." }
    ]
    return (
        <div>
            <div className='w-full  max-md:hidden mx-auto '>
                <SolutionSlider />
            </div>
            <div className='w-full  md:hidden pb-2'>
                <SolutionMobileSlider data={data} />
            </div>
        </div>
    )
}
