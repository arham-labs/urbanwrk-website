
"use client"
import React from 'react'
import SolutionSlider from './solutionsSlider'
import SolutionMobileSlider from './solutionMobileSlider'

export default function Solutions() {


   

    const data = [
        { img: "/images/home/solutionCard1.png",title:"Tailormade Offices", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days." },
        { img: "/images/home/solutionCard2.png",title:"Ready-To-Work In Offices", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately." },
        { img: "/images/home/solutionCard3.png",title:"Meeting Rooms", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone." },
        { img: "/images/home/solutionCard4.png",title:"Events & Shoots", title1: `Events &`, title2: "Shoots", desc: "Tailormade event solutions with hospitality and catering for up to 250 people." },
        { img: "/images/home/solutionCard5.png",title:"Advertise With Us", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across 10 mn+ sq ft of prime real estate to put your brand on top of minds." }
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
                <SolutionSlider />
            </div>
            <div className='w-full  md:hidden  pt-8   pb-4'>
                <SolutionMobileSlider data={data} />
            </div>
        </div>
    )
}
