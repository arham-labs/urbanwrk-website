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

    ]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={80} width={50} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '60px', height: "50px", color: "transparent", right: "-2%", top: "50%" }} />
            </>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <>
                <Image src="/images/home/rightArrow.svg" height={160} width={72} alt='SolutionCard' className={`${className}  `}
                    onClick={onClick}
                    style={{ width: '100px', height: "100px", color: "transparent" }} />
            </>
        );
    }






    const settings = {
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        rows: 2,
        nextArrow: <SampleNextArrow />,

    };
    return (
        <div className="slider-container">
            <Slider {...settings} >

                {data?.map((item, index) => (
                    <div key={index} className="flex flex-wrap gap-40   pt-20">
                        <Image src={item?.img} alt={"img"} width={50} height={50}
                        />
                        <div className="pt-6">{item?.title}</div>
                    </div>))}
            </Slider>
        </div>
    );
}

