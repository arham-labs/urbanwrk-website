"use client"
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function AmenitiesSliderMobile({ data }) {

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
                {data?.locationInsideAmenities?.map((item, index) => (
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
