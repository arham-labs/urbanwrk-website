"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function LocationBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        arrows: false,
        afterChange: (current) => setCurrentSlide(current)
    };

    return (
        <div style={{ position: 'relative' }}>
            <Slider {...settings}>
                {[...Array(5)].map((_, i) => (
                    <div key={i}>
                        <div className='h-[100vh]' style={{ position: 'relative' }}>
                            <Image src={`/images/locationInside/banner${i + 1}.png`} alt="location inside page" height={1000} width={1000} className='h-full w-full max-md:object-cover md:object-cover' unoptimized />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dots-container">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${currentSlide === i ? 'active' : ''}`}
                        style={{ left: `${i * 20}px` }}
                    ></div>
                ))}
            </div>
            <style jsx>{`
                .dots-container {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: white;
                    margin-right: 10px;
                    cursor: pointer;
                    transition: background-color 0.1s;
                }
                .dot.active {
                    background-color: red;
                }
            `}</style>
        </div>
    );
}
