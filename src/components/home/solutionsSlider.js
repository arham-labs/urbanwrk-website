"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";
import Image from "next/image";


export default function SolutionSlider() {



    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={160} width={72} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '100px', height: "100px", color: "transparent", right: "2px" }} />
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
        variableWidth: true,
        centerMode: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
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
                {[...Array(4)].map((_, index) => (
                    <div  key={index} className="pr-[40px]">
                    <SolutionCard />
                    </div>
                ))}
            </Slider>
        </div>
    );
}


