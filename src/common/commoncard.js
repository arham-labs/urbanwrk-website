'use client'
import Image from "next/image";
import Slider from "react-slick";

export default function CommonCard({ data, leftAlign }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <>
            <div className="lg:grid grid-cols-3 gap-8 hidden">
                {data.map((el, i) =>
                    <div className="flex flex-col" key={i}>
                        <div className="border-b-[10px] border-primary mb-7">
                            <Image src={el.source} className="aspect-[17/19] w-full" alt="card" />
                        </div>
                        <span className="text-2xl font-medium block mb-3">{el.title}</span>
                        <p className="leading-[21px] text-sm lg:text-base font-medium">{el.desc}</p>
                    </div>
                )}
            </div>
            <div className="lg:hidden">
                <Slider {...settings}>
                    {data.map((el, i) =>
                        <div className="flex flex-col relative" key={i}>
                            <div className="border-b-[10px] border-primary mb-7 lg:mb-10">
                                <Image src={el.source} className="aspect-[17/19] w-full" alt="card" />
                            </div>
                            <span className="text-2xl font-medium block mb-3 lg:mb-5">{el.title}</span>
                            <p className="leading-[21px] text-sm font-medium mb-5">{el.desc}</p>
                        </div>
                    )}
                </Slider>
            </div>
            <style>{`
             .slick-dots li { margin: 0 !important; }
             .slick-dots li button:before { 
                color: #C72030 !important; 
                font-size: 10px !important;
            }
            `}
            </style>
        </>

    )
}

