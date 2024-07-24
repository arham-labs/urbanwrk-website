
"use client"
import React from 'react'
import SolutionSlider from '../home/solutionsSlider'
import SolutionMobileSlider from '../home/solutionMobileSlider'


export default function Solutions() {

    const data = [
        { img: "/images/home/solutionCardl1.webp", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days." ,link:"/solutions/tailormade-office"},
        { img: "/images/home/solutionCardl2.webp", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately.",link:"/solutions/ready-to-work-in"  },
        { img: "/images/home/solutionCardl3.webp", title1: `Virtual`, title2: "Offices", desc: "Premium business address with mail handling and registration services for your venture.  ",link:"/solutions/virtual-offices" },
        { img: "/images/home/solutionCardl4.webp", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone.",link:"/solutions/meeting-rooms" },
        { img: "/images/home/solutionCardl5.webp", title1: `Events &`, title2: "Launches", desc: "Tailormade event solutions with hospitality and catering for up to 250 people.",link:"/solutions/events-launches" },
        { img: "/images/home/solutionCardl6.webp", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across prime real estate to put your brand on top of minds.",link:"/solutions/advertise-with-us" }
    ]

    return (
        <div>
            <div className='w-full  max-md:hidden mx-auto '>
                <SolutionSlider data={data} />
            </div>
            <div className='w-full md:hidden pb-2'>
                <SolutionMobileSlider data={data} />
            </div>
        </div>
    )
}
