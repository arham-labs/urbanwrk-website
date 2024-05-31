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
                    <div key={index} className=" mb-6 px-1 ">
                        <SolutionCard item={item} />
                    </div>
                ))}
            </Slider>
            <style>{`
                .slick-dots {
                    text-align: center !important;
                    bottom: -28px !important;
                    width: 100%;
                    padding: 0;
                }
                .slick-dots li {
                    display: inline-block;
                    margin: 0 2px;
                }
                .slick-dots li button:before {
                    color: #7D7C7C !important;
                    font-size: 8px !important;
                }
                .slick-dots li.slick-active button:before {
                    color: #C72030 !important;
                    font-size: 8px !important;
                }
            `}</style>
        </div>
        
    );
}

export default SolutionMobileSlider;
