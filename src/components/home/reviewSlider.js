"use client"
import React from "react";
import Slider from "react-slick";
import ReviewCard from "./reviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    };

    return (
        <>
            <Slider {...settings}>
                {[...Array(4)].map((_, index) => (<div key={index}>
                    <ReviewCard />
                </div>))}
            </Slider>
        </>
    );
}
