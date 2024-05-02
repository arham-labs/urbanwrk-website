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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
            {data.map((item, index) => (
                    <div key={index} className=" mb-6 ">
                        <SolutionCard item={item} />
                    </div>
                ))}
            </Slider>
            
        </div>
        
    );
}

export default SolutionMobileSlider;
