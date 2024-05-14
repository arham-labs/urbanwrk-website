"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";

import Image from "next/image";


export default function AmenitiesSlider() {

    const data = [{ img: "/images/solutionsLanding/logoAmenities/amenities1.svg", title: "Conference rooms " },
    { img: "/images/solutionsLanding/logoAmenities/amenities2.svg", title: "Enterprise grade IT set-up " },
    { img: "/images/solutionsLanding/logoAmenities/amenities3.svg", title: "Seamless connectivity" },
    { img: "/images/solutionsLanding/logoAmenities/amenities4.svg", title: "Indoor air quality control " },
    { img: "/images/solutionsLanding/logoAmenities/amenities5.svg", title: "Concierge" },
    { img: "/images/solutionsLanding/logoAmenities/amenities6.svg", title: "24x7 Access" },
    { img: "/images/solutionsLanding/logoAmenities/amenities7.svg", title: "IT room" },
    { img: "/images/solutionsLanding/logoAmenities/amenities8.svg", title: "Multi-location" },
    { img: "/images/solutionsLanding/logoAmenities/amenities9.svg", title: "Digital access control" },
    { img: "/images/solutionsLanding/logoAmenities/amenities10.svg", title: "Quality staff" },
    { img: "/images/solutionsLanding/logoAmenities/amenities11.svg", title: "Gym" },
    { img: "/images/solutionsLanding/logoAmenities/amenities12.svg", title: "Event space" },
    { img: "/images/solutionsLanding/logoAmenities/amenities13.svg", title: "CCTV" },
    { img: "/images/solutionsLanding/logoAmenities/amenities14.svg", title: "Housekeeping & sanitation" },
    { img: "/images/solutionsLanding/logoAmenities/amenities15.svg", title: "Fire safety" },
    { img: "/images/solutionsLanding/logoAmenities/amenities16.svg", title: "Occupancy sensor" },
    { img: "/images/solutionsLanding/logoAmenities/amenities17.svg", title: "Printing station" },
    { img: "/images/solutionsLanding/logoAmenities/amenities18.svg", title: "Cafe" },
    { img: "/images/solutionsLanding/logoAmenities/amenities19.svg", title: "Parking" },
    { img: "/images/solutionsLanding/logoAmenities/amenities20.svg", title: "Visitor management" },
    { img: "/images/solutionsLanding/logoAmenities/amenities1.svg", title: "Conference rooms " },
    { img: "/images/solutionsLanding/logoAmenities/amenities2.svg", title: "Enterprise grade IT set-up " },
    { img: "/images/solutionsLanding/logoAmenities/amenities3.svg", title: "Seamless connectivity" },
    { img: "/images/solutionsLanding/logoAmenities/amenities4.svg", title: "Indoor air quality control " },
    { img: "/images/solutionsLanding/logoAmenities/amenities5.svg", title: "Concierge" },
    { img: "/images/solutionsLanding/logoAmenities/amenities6.svg", title: "24x7 Access" },
    { img: "/images/solutionsLanding/logoAmenities/amenities7.svg", title: "IT room" },
    { img: "/images/solutionsLanding/logoAmenities/amenities8.svg", title: "Multi-location" },
    { img: "/images/solutionsLanding/logoAmenities/amenities9.svg", title: "Digital access control" },
    { img: "/images/solutionsLanding/logoAmenities/amenities10.svg", title: "Quality staff" },
    { img: "/images/solutionsLanding/logoAmenities/amenities11.svg", title: "Gym" },
    { img: "/images/solutionsLanding/logoAmenities/amenities12.svg", title: "Event space" },
    { img: "/images/solutionsLanding/logoAmenities/amenities13.svg", title: "CCTV" },
    { img: "/images/solutionsLanding/logoAmenities/amenities14.svg", title: "Housekeeping & sanitation" },
    { img: "/images/solutionsLanding/logoAmenities/amenities15.svg", title: "Fire safety" },
    { img: "/images/solutionsLanding/logoAmenities/amenities16.svg", title: "Occupancy sensor" },
    { img: "/images/solutionsLanding/logoAmenities/amenities17.svg", title: "Printing station" },
    { img: "/images/solutionsLanding/logoAmenities/amenities18.svg", title: "Cafe" },
    { img: "/images/solutionsLanding/logoAmenities/amenities19.svg", title: "Parking" },
    { img: "/images/solutionsLanding/logoAmenities/amenities20.svg", title: "Visitor management" },
    { img: "/images/solutionsLanding/logoAmenities/amenities1.svg", title: "Conference rooms " },
    { img: "/images/solutionsLanding/logoAmenities/amenities2.svg", title: "Enterprise grade IT set-up " },
    { img: "/images/solutionsLanding/logoAmenities/amenities3.svg", title: "Seamless connectivity" },
    { img: "/images/solutionsLanding/logoAmenities/amenities4.svg", title: "Indoor air quality control " },
    { img: "/images/solutionsLanding/logoAmenities/amenities5.svg", title: "Concierge" },
    { img: "/images/solutionsLanding/logoAmenities/amenities6.svg", title: "24x7 Access" },
    { img: "/images/solutionsLanding/logoAmenities/amenities7.svg", title: "IT room" },
    { img: "/images/solutionsLanding/logoAmenities/amenities8.svg", title: "Multi-location" },
    { img: "/images/solutionsLanding/logoAmenities/amenities9.svg", title: "Digital access control" },
    { img: "/images/solutionsLanding/logoAmenities/amenities10.svg", title: "Quality staff" },
    { img: "/images/solutionsLanding/logoAmenities/amenities11.svg", title: "Gym" },
    { img: "/images/solutionsLanding/logoAmenities/amenities12.svg", title: "Event space" },
    { img: "/images/solutionsLanding/logoAmenities/amenities13.svg", title: "CCTV" },
    { img: "/images/solutionsLanding/logoAmenities/amenities14.svg", title: "Housekeeping & sanitation" },
    { img: "/images/solutionsLanding/logoAmenities/amenities15.svg", title: "Fire safety" },
    { img: "/images/solutionsLanding/logoAmenities/amenities16.svg", title: "Occupancy sensor" },
    { img: "/images/solutionsLanding/logoAmenities/amenities17.svg", title: "Printing station" },
    { img: "/images/solutionsLanding/logoAmenities/amenities18.svg", title: "Cafe" },
    { img: "/images/solutionsLanding/logoAmenities/amenities19.svg", title: "Parking" },
    { img: "/images/solutionsLanding/logoAmenities/amenities20.svg", title: "Visitor management" },
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


