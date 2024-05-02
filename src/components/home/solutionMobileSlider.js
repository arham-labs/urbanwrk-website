"use client"
import React from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";

function SolutionMobileSlider({data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
            {data.map((item, index) => (
                    <div key={index} className="pr-[25px]">
                        <SolutionCard item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SolutionMobileSlider;
