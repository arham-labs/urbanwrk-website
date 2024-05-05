"use client"
import React from 'react'
import Slider from "react-slick";
import LocationSpaceCardMobile from './locationSpaceCardMobile';

export default function LocationParkSliderMobile() {
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
        <div className="slider-container relative">
            <Slider {...settings}>
                {[...Array(3)].map((item, index) => (
                    <div key={index} className="mb-16 p-1">
                        <LocationSpaceCardMobile />
                    </div>
                ))}
            </Slider>
            <style>{`
                .slick-dots {
                    text-align: center !important;
                    bottom: 20px;
                    width: 100%;
                    padding: 0;
                }
                .slick-dots li {
                    display: inline-block;
                    margin: 0 5px;
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
