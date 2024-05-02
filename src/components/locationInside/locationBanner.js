"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';




export default function LocationBanner() {


    const settings = {
        dots: true,
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
                {[...Array(5)].map((_, i) =>
                    <div  key={i}>
                        <div className='max-md:hidden h-[80vh]'>
                            <Image src={`/images/locationInside/banner${i + 1}.png`} alt="location inside page" height={1000} width={1000} className='h-full w-full ' unoptimized />
                        </div>
                        <div className='md:hidden max-md:h-[100vh]'>
                            <Image src={`/images/locationInside/mobileBanner/banner${i + 1}.png`} alt="location inside page" height={1000} width={1000} className='h-full w-full  ' unoptimized />
                        </div>
                    </div>
                )}
            </Slider>
            <style jsx global>{`
                .slick-dots  {
                    bottom: 20px !important;
                }
                .slick-dots li button:before {
                    color: white !important;
                    font-size: 8px !important;
                }
                .slick-dots li.slick-active button:before   {
                    color: #C72030 !important;
                    font-size: 8px !important;
                   
                }
            `}</style>
        </div>
    )
}

