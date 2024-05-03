"use client"
import React from 'react'
import Slider from "react-slick";
import LocationSpaceCard from './locationSpaceCard';
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
        <div className="slider-container">
            <Slider {...settings}>

                {[...Array(3)].map((item, index) => (
                    <div key={index} className="mb-6 " >
                        <LocationSpaceCardMobile />
                    </div>
                ))}


            </Slider>
            <style jsx global>{`
              
                .slick-dots li button:before {
                    color: #7D7C7C !important;
                    font-size: 8px !important;
                }
                .slick-dots li.slick-active button:before   {
                    color: #C72030 !important;
                    font-size: 8px !important;
                }
            `}</style>
        </div>

    );

}
