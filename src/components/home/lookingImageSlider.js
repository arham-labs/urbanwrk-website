"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';




export default function LookingImageSlider() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    };
    return (
        <div>
            <Slider {...settings} >
                {[...Array(4)].map((_, i) =>
                    <div  key={i}>
                        <div className='max-md:hidden '>
                            <Image src={`/images/home/exploreCard${i + 1}.png`} alt="location inside page" height={1000} width={1000} className='h-[875px] w-full object-top' unoptimized />
                        </div>
                        <div className='md:hidden '>
                            <Image src={`/images/home/exploreCard${i + 1}.png`} alt="location inside page" height={1000} width={1000} className='h-[800px] w-full  object-cover' unoptimized />
                        </div>
                    </div>
                )}
            </Slider>
            
        </div>
    )
}

