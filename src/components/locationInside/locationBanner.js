"use client"
import React from 'react';
import Image from 'next/image';
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
            <Slider {...settings}>
                {[...Array(5)].map((_, i) => (
                    <div key={i}>
                        <div className='h-[100vh]'>
                            <Image src={`/images/locationInside/banner${i + 1}.png`} alt="location inside page" height={1000} width={1000} className='h-full w-full ' unoptimized />
                        </div>

                    </div>
                ))}
            </Slider>
            <style>{`
             .slick-dots{
                text-align: center !important;
             }
             .slick-dots li { margin: 0 !important; }
             .slick-dots li button:before { 
                color: #C72030 !important; 
                font-size: 8px !important;
                opacity:1
            }
                .slick-dots{
                    bottom: -26px !important;
                }
            }
            `}
            </style>
        </div>
    );
}

