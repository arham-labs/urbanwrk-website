import React from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";


export default function SolutionSlider() {

    const data = [
        { img: "/images/home/solutionCardl1.png", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days." ,link:"/solutionsLanding/tailormade-office"},
        { img: "/images/home/solutionCardl2.png", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately.",link:"/solutionsLanding/ready-to-work-in"  },
        { img: "/images/home/solutionCardl3.png", title1: `Virtual`, title2: "Offices", desc: "Premium business address with mail handling and registration services for your venture.  ",link:"/solutionsLanding/virtual-offices" },
        { img: "/images/home/solutionCardl5.png", title1: `Events &`, title2: "Launches", desc: "Tailormade event solutions with hospitality and catering for up to 250 people.",link:"/solutionsLanding/events-launches" },
        { img: "/images/home/solutionCardl4.png", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone.",link:"/solutionsLanding/meeting-rooms" },
        { img: "/images/home/solutionCardl6.png", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across 10 mn+ sq ft of prime real estate to put your brand on top of minds.",link:"/solutionsLanding/advertise-with-us" }
    ]

    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    }

    return (
        <div className="slider-container ">
            <Slider {...settings}  >
                {data.map((item, index) => (

                    <div key={index} className="pl-[30px] max-w-[100%] " >
                        <SolutionCard item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
