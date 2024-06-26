"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";

import Image from "next/image";


export default function AmenitiesSlider() {

    const data = [{ img: "/images/solutionsLanding/logoAmenities/amenitiesN1.svg", title: "Conference rooms " },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN6.svg", title: "24x7 Access" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN2.svg", title: "Enterprise grade IT set-up " },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN7.svg", title: "IT room" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN3.svg", title: "Seamless connectivity" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN8.svg", title: "Multi-location" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN10.svg", title: "Indoor air quality control " },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN9.svg", title: "Digital access control" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN22.svg", title: "Concierge" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN12.svg", title: "Quality staff" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN19.svg", title: "Gym" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN20.svg", title: "Occupancy sensor" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN14.svg", title: "Event space" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN13.svg", title: "Printing station" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN16.svg", title: "CCTV" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN15.svg", title: "Cafe" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN17.svg", title: "Housekeeping & sanitation" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN18.svg", title: "Parking" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN5.svg", title: "Fire safety" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN21.svg", title: "Visitor management" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN1.svg", title: "Conference rooms " },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN6.svg", title: "24x7 Access" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN2.svg", title: "Enterprise grade IT set-up " },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN7.svg", title: "IT room" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN3.svg", title: "Seamless connectivity" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN8.svg", title: "Multi-location" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN10.svg", title: "Indoor air quality control " },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN9.svg", title: "Digital access control" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN22.svg", title: "Concierge" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN12.svg", title: "Quality staff" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN19.svg", title: "Gym" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN20.svg", title: "Occupancy sensor" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN14.svg", title: "Event space" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN13.svg", title: "Printing station" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN16.svg", title: "CCTV" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN15.svg", title: "Cafe" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN17.svg", title: "Housekeeping & sanitation" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN18.svg", title: "Parking" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN5.svg", title: "Fire safety" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN21.svg", title: "Visitor management" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN1.svg", title: "Conference rooms " },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN6.svg", title: "24x7 Access" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN2.svg", title: "Enterprise grade IT set-up " },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN7.svg", title: "IT room" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN3.svg", title: "Seamless connectivity" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN8.svg", title: "Multi-location" },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN10.svg", title: "Indoor air quality control " },
        { img: "/images/solutionsLanding/logoAmenities/amenitiesN9.svg", title: "Digital access control" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN22.svg", title: "Concierge" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN12.svg", title: "Quality staff" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN19.svg", title: "Gym" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN20.svg", title: "Occupancy sensor" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN14.svg", title: "Event space" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN13.svg", title: "Printing station" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN16.svg", title: "CCTV" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN15.svg", title: "Cafe" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN17.svg", title: "Housekeeping & sanitation" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN18.svg", title: "Parking" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN5.svg", title: "Fire safety" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN21.svg", title: "Visitor management" },{ img: "/images/solutionsLanding/logoAmenities/amenitiesN1.svg", title: "Conference rooms " },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN6.svg", title: "24x7 Access" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN2.svg", title: "Enterprise grade IT set-up " },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN7.svg", title: "IT room" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN3.svg", title: "Seamless connectivity" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN8.svg", title: "Multi-location" },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN10.svg", title: "Indoor air quality control " },
    { img: "/images/solutionsLanding/logoAmenities/amenitiesN9.svg", title: "Digital access control" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN22.svg", title: "Concierge" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN12.svg", title: "Quality staff" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN19.svg", title: "Gym" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN20.svg", title: "Occupancy sensor" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN14.svg", title: "Event space" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN13.svg", title: "Printing station" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN16.svg", title: "CCTV" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN15.svg", title: "Cafe" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN17.svg", title: "Housekeeping & sanitation" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN18.svg", title: "Parking" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN5.svg", title: "Fire safety" },
{ img: "/images/solutionsLanding/logoAmenities/amenitiesN21.svg", title: "Visitor management" },
    
    ]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={80} width={50} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '60px', height: "50px", color: "transparent", top: "50%" }} />
            </>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/leftArrow.svg" height={80} width={50} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '60px', height: "50px", color: "transparent", top: "50%" }} />
            </>
        );
    }






    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        rows: 2,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="pl-[10%]">

                {data?.map((item, index) => (
                    <div key={index} className="flex flex-wrap  items-center w-[30px] px-6  py-10">
                        <Image src={item?.img} alt={"img"} width={50} height={50}
                        />
                        <div className="py-6">{item?.title}</div>
                    </div>))}
            </Slider>
        </div>
    );
}


