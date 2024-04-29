"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";
import Image from "next/image";


export default function SolutionSlider() {
const data=[
    {img:"/images/home/solutionCard1.png",title1:"Tailormade",title2:"Offices",desc:"Fully-managed, branded solution built as per your vision, within 45-60 days."},
    {img:"/images/home/solutionCard2.png",title1:"Ready-To-Work",title2:"In Offices",desc:"Ready offices for your growing team to move in and get to work immediately."},
    {img:"/images/home/solutionCard3.png",title1:"Meeting",title2:"Rooms",desc:"Ready offices for your growing team to move in and get to work immediately."},
    {img:"/images/home/solutionCard3.png",title1:"Meeting",title2:"Rooms",desc:"Ready offices for your growing team to move in and get to work immediately."},
    {img:"/images/home/solutionCard3.png",title1:"Meeting",title2:"Rooms",desc:"Ready offices for your growing team to move in and get to work immediately."},

]




    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={80} width={50} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '80px', height: "80px", color: "transparent", right: "2px" }} />
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
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings} >
                {data.map((item, index) => (
                    <div key={index} className="pr-[25px]">
                        <SolutionCard  item={item}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


