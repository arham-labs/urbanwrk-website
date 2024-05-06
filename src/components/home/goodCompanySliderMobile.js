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
        autoplay: true,
        autoplaySpeed: 2000,
        rows: 3,
        arrows:false
    };

    return (
        <Slider {...settings}>
            {[...Array(18)].map((_, i) => (
                <div className='w-[50%] m-4  flex flex-col justify-around' key={i}>
                    <div className='flex justify-center items-center h-[100px] w-[100px] mx-auto'>
                        <Image src={`/images/home/logo${i + 1}.svg`} height={50} width={60} alt="logo" className='w-full' />
                    </div>
                    <div className='pt-8'>
                        <div className='border-rgba(116, 116, 116, 0.60) border w-[150px] mx-auto'></div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
