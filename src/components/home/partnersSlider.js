"use client"
import React from "react";
import Slider from "react-slick";
import ReviewCard from "./reviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function PartnersSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    return (
        <>
            <Slider {...settings}>
                {[...Array(4)].map((_, index) => (<div key={index}>
                    <Image src="/images/home/partners1.png" alt={"img"} width={200} height={200} />
                </div>))}
            </Slider>
        </>
    );
}
