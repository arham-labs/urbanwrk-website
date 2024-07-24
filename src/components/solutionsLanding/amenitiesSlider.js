"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function AmenitiesSlider({ data }) {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={80} width={50} alt='SolutionCard' className={`${className} ${data?.locationInsideAmenities?.length > 8 ? "block" : "!hidden"}`}
                    onClick={onClick}
                    style={{ width: '60px', height: "50px", color: "transparent", top: "50%" }} />
            </>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/leftArrow.svg" cla height={80} width={50} alt='SolutionCard' className={`${className} ${data?.locationInsideAmenities?.length > 8 ? "block" : "!hidden"} `}
                    onClick={onClick}
                    style={{ width: '60px', height: "50px", color: "transparent", top: "50%" }} />
            </>
        );
    }

    const settings = {
        dots: false,
        slidesToShow: 4,
        rows: 2,
        infinite: true,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (
        <div className="slider-container">
            <Slider {...settings} className={`${data?.locationInsideAmenities?.length > 8 ? "pl-[10%]" : "pl-[6%]"}`}>

                {data?.locationInsideAmenities?.map((item, index) => (
                    <div key={index} className="flex flex-wrap  items-center w-[30px] px-6  py-10">
                        <Image src={item?.img} alt={"img"} width={50} height={50}
                        />
                        <div className="py-6">{item?.title}</div>
                    </div>))}
            </Slider>
        </div>
    );
}


