
"use client"
import React from 'react'
import SolutionSlider from './solutionsSlider'
import SolutionMobileSlider from './solutionMobileSlider'

export default function Solutions() {


    const data = [
        { img: "/images/home/solutionCardl1.png", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days.",link:"/solutions/tailormade-office" },
        { img: "/images/home/solutionCardl2.png", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately.",link:"/solutions/ready-to-work-in" },
        { img: "/images/home/solutionCardl3.png", title1: `Virtual`, title2: "Offices", desc: "Premium business address with mail handling and registration services for your venture.  ",link:"/solutions/virtual-offices" },
        { img: "/images/home/solutionCardl4.png", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone.",link:"/solutions/meeting-rooms" },
        { img: "/images/home/solutionCardl5.png", title1: `Events &`, title2: "Launches", desc: "Tailormade event solutions with hospitality and catering for up to 250 people.",link:"/solutions/events-launches" },
        { img: "/images/home/solutionCardl6.png", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across 10 mn+ sq ft of prime real estate to put your brand on top of minds.",link:"/solutions/advertise-with-us" }
    ]
    return (
        <div>
            <div className='text-center'>
                <div className=' text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl '>
                    Solutions
                    <div className='font-kepler text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] leading-[1.2] text-center'>
                        for everything you need
                    </div>
                </div>
            </div>
            <div className='w-full  max-md:hidden mx-auto pt-20 2xl:max-w-[1560px] '>
                <SolutionSlider  data={data} />
            </div>
            <div className='w-full  md:hidden  pt-8'>
                <SolutionMobileSlider data={data} />
            </div>
        </div>
    )
}
