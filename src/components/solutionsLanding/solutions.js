
"use client"
import React from 'react'
import SolutionSlider from '../home/solutionsSlider'
import SolutionMobileSlider from '../home/solutionMobileSlider'


export default function Solutions() {

    const data = [
        { img: "/images/home/solutionCardl1.webp", title1: "Tailor-made", title2: "Offices", desc: "Fully managed brand solutions built as per your vision within 30-45 days.", link: "/solutions/tailormade-offices", alt: "tailor-made office" },
        { img: "/images/home/solutionCardl2.webp", title1: "UrbanWrk", title2: "Studios", desc: "Ready-to-move-in workspaces that inspire innovation and breakthrough thinking - your team can start today", link: "/solutions/urbanwrk-studios", alt: "UrbanWrk Studios" },
        { img: "/images/home/solutionCardl4.webp", title1: "Meeting", title2: "Rooms", desc: "Boardroom polish, plug-and-play ease. Spaces for up to 25 that make every meeting count.", link: "/solutions/meeting-rooms", alt: "meetings rooms" },
        { img: "/images/home/solutionCardl7.jpg", title1: "Day", title2: "Pass", desc: "All the benefits of UrbanWrk, without the commitment. Come for a day, stay for the experience.", link: "", alt: "day pass" },
        { img: "/images/home/solutionCardl3.webp", title1: `Virtual`, title2: "Offices", desc: "Your business address, handled. Mail, registration, and credibility- all without the overhead.", link: "/solutions/virtual-offices", alt: "virtual office" },
        { img: "/images/home/solutionCardl5.webp", title1: `Events &`, title2: "Launches", desc: "Tailor-made venues with unparalleled hospitality and catering for up to 250 guests.", link: "/solutions/events-launches", alt: "event & launches" },
        { img: "/images/home/solutionCardl6.webp", title1: "Advertise", title2: "With Us", desc: "Prime promotional real estate that puts your brand in front of the right audience.", link: "/solutions/advertise-with-us", alt: "advertise with us" }
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
