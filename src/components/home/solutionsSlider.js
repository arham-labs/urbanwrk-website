import React from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";


export default function SolutionSlider() {

    const data = [
        { img: "/images/home/solutionCard1.png",title:"Tailormade Offices", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days." },
        { img: "/images/home/solutionCard2.png",title:"Ready-To-Work In Offices", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately." },
        { img: "/images/home/solutionCard3.png",title:"Meeting Rooms", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone." },
        { img: "/images/home/solutionCard4.png",title:"Events & Shoots", title1: `Events &`, title2: "Shoots", desc: "Tailormade event solutions with hospitality and catering for up to 250 people." },
        { img: "/images/home/solutionCard5.png",title:"Advertise With Us", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across 10 mn+ sq ft of prime real estate to put your brand on top of minds." }
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
