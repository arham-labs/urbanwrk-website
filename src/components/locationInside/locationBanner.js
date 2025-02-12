'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function LocationBanner({ data }) {
    const [poster, setPoster] = useState(data?.posterImage);
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef?.current?.play();
        const updatePoster = () => {
            setPoster(window.innerWidth <= 768 ? data?.posterMobileImage : data?.posterImage);
        };
        updatePoster();
        window.addEventListener('resize', updatePoster);
        return () => window.removeEventListener('resize', updatePoster);
    }, [data]);

    const items = [
        <div key="video-slide" className="flex bg-cover bg-no-repeat relative h-screen cursor-pointer">
            <video ref={videoRef} autoPlay muted controls poster={poster} className="w-full h-full object-cover">
                <source src={data.videourl} type="video/mp4" />
            </video>
        </div>,
        ...data?.BannerData?.map((el, index) => (
            <div className="w-full h-screen" key={`banner-${index}`}>
                <Image
                    src={el.deskimage}
                    alt="Poster"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover hidden lg:block"
                    priority
                />
                <Image
                    src={el.mobimage}
                    alt="Poster"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover lg:hidden"
                    priority
                />
            </div>
        )),
    ];

    const items1 = data?.BannerData?.map((el, index) => (
        <div className="w-full h-screen" key={`banner-only-${index}`}>
            <Image
                src={el.deskimage}
                alt="Poster"
                width={1920}
                height={1080}
                className="w-full h-full object-cover hidden lg:block"
                priority
            />
            <Image
                src={el.mobimage}
                alt="Poster"
                width={1920}
                height={1080}
                className="w-full h-full object-cover lg:hidden"
                priority
            />
        </div>
    ));

    return (
        <>
            {data.video ? (
                <div className="relative w-full">
                    <Swiper loop pagination={{ clickable: true }} navigation modules={[Pagination, Navigation]} className="mySwiper">
                        {items.map((el, i) => (
                            <SwiperSlide key={`slide-${i}`}>
                                {el}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : data.locationName === "Westport" ? (
                <div className="relative w-full">
                    <Swiper loop pagination={{ clickable: true }} navigation modules={[Pagination, Navigation]} className="mySwiper">
                        {items1.map((el, i) => (
                            <SwiperSlide key={`westport-slide-${i}`}>
                                {el}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="h-screen relative">
                    <Image
                        src={data?.bannerImage}
                        alt={data?.bannerAlt}
                        width={1920}
                        height={1080}
                        className="hidden lg:block w-full h-full object-cover"
                        priority
                    />
                    <Image
                        src={data?.mobileBanner}
                        alt={data?.bannerAlt}
                        width={1920}
                        height={1080}
                        className="lg:hidden w-full h-full object-cover"
                        priority
                    />
                </div>
            )}
        </>
    );
}
