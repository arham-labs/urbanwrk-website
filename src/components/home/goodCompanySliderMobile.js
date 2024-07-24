"use client"
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function GoodCompanySliderMobile() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        rows: 2,
        arrows:false
    };

    return (
        <Slider {...settings}>
            {[...Array(24)].map((_, i) => (
                <div className='w-1/2 my-5 flex flex-col justify-around' key={i}>
                    <div className='flex justify-center items-center h-[100px] w-[100px] mx-auto'>
                        <Image src={`/images/home/logooo${i + 1}.svg`} height={50} width={60} alt="logo" className='w-full' />
                    </div>
                    <div className='pt-8'>
                        <div className='border-rgba(116, 116, 116, 0.60) border w-[150px] mx-auto'></div>
                    </div>
                </div>
            ))}
            <style>{`
            .slick-dots li.slick-active button:before {
                color: #C72030 !important;
            }
            .slick-dots li button:before{
                font-size: 8px !important;
            }
            `}</style>
        </Slider>
    );
}
