"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";
import Image from "next/image";


export default function SolutionSlider() {
  
    const data = [
        { img: "/images/home/solutionCard1.png", title1: "Tailormade", title2: "Offices", desc: "Fully-managed, branded solution built as per your vision, within 45-60 days." },
        { img: "/images/home/solutionCard2.png", title1: "Ready-To-Work", title2: "In Offices", desc: "Ready offices for your growing team to move in and get to work immediately." },
        { img: "/images/home/solutionCard3.png", title1: "Meeting", title2: "Rooms", desc: "State-of-the-art conference rooms for up to 25 people to make every meeting a milestone." },
        { img: "/images/home/solutionCard4.png", title1: `Events &`, title2: "Shoots", desc: "Tailormade event solutions with hospitality and catering for up to 250 people." },
        { img: "/images/home/solutionCard5.png", title1: "Advertise", title2: "With Us", desc: "Promotional spaces across 10 mn+ sq ft of prime real estate to put your brand on top of minds." }
    ]


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
               <Image src="/images/home/rightArrow.svg" height={80} width={50} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '60px', height: "50px", color: "transparent", right: "-2%",top:"50%" }} />
            </>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={160} width={72} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '100px', height: "100px", color: "transparent" }} />
            </>
        );
    }






    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,

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
    };
    return (
        <div className="slider-container  max-w-[1920px] mx-auto flex flex-col justify-between ">
            <Slider {...settings} >
                {data.map((item, index) => (
                    <div key={index} className="pl-[30px] max-w-[462px]">
                        <SolutionCard item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}


