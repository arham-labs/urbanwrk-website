"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";


export default function LocationSlider() {


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.9,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="slider-container">
            <Slider {...settings} >
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="aspect-[14/10] !pr-12 ">
                        <Image
                            src={`/images/locationInside/locationCard${index + 1}.png`}
                            alt="location-page"
                            height={250}
                            width={300}
                            className="w-full h-full"
                            unoptimized
                        />
                    </div>
                ))}
           
            </Slider>
        </div>
    );
}


