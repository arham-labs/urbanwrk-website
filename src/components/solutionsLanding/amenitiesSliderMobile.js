"use client"
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function AmenitiesSliderMobile() {


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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        rows: 2,
        arrows: false
    };
    return (
        <div>
            <Slider {...settings} className='flex justify-center items-center pt-5  max-md:pb-10  '>
                {data?.map((item, index) => (
                    <div key={index} className="flex flex-wrap gap-20 px-4 py-4 justify-center items-center min-h-[170px]">
                        <div className='flex flex-col pb-3 '>
                            <Image src={item?.img} alt={"img"} width={50} height={50}
                            />
                            <div className="pt-5 flex flex-wrap ">{item?.title}</div>
                        </div>

                    </div>))}
            </Slider>
            <style>{`
                .slick-dots {
                    text-align: left !important;
                    bottom: 0px;
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

    )
}
