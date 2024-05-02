'use client'
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function Testimonial() {

    const reviewsData = [
        { name: "Radha Shrestha", position: "Director", desc: "The flexibility and scalability allowed CoinDCX to adapt quickly to new markets and team sizes.", logo: "/images/coindcx.svg", source: "/images/radha-shrestha.png" },
        { name: "Rahuk Kamble", position: "Senior Manager, HR", desc: "We appreciate the excellent assistance and support we receive from the UrbanWrk team. We love the high-quality service and professionalism.", logo: "/images/affinity.svg", source: "/images/affinity-banner.png" },
        { name: "Amit Phogat", position: "Manager", desc: "UrbanWrk offers the best of modern worksapces, premium hospitality and hassle-free processes with flexible solutions.", logo: "/images/aon.svg", source: "/images/aon-banner.png" }
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="bg-bglight4 pt-16 pb-24 px-6">
            <Slider {...settings}>
                {reviewsData.map((el, i) =>
                    <div className="text-center lg:text-left px-0 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px]">
                        <div className="flex lg:flex-row flex-col gap-5 lg:gap-20">
                            <div className="w-full lg:w-[45%]">
                                <Image src={el.source} alt="radha" width={1200} height={900} className="aspect-[10/8] lg:aspect-[9/8]" />
                            </div>
                            <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start gap-2 pt-6">
                                <div className="flex items-start gap-0 lg:gap-8">
                                    <Image src="/images/about-us/quote.svg" className="w-7 lg:w-12" width={100} height={100} alt="quote" />
                                    <p className="leading-[21px] lg:leading-[32px] text-sm lg:text-xl font-medium mt-2 lg:mt-5">{el.desc}</p>
                                </div>
                                <div className="flex flex-col ml-[78px]">
                                    <div className="flex flex-col items-center lg:items-start gap-1">
                                        <span className="text-sm font-semibold">{el.name}</span>
                                        <span className="font-kepler text-sm">{el.position}</span>
                                        <Image src={el.logo} alt="coindcx" width={50} height={50} className={`${i == 1 ? "w-20" : "w-14"}`} />
                                    </div>
                                    <Link href="/" className="mt-5 bg-black p-2 text-sm text-white lg:py-1 lg:px-10">Discover more</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
            <style>{`
             .slick-dots{
                text-align: center !important;
                bottom: -60px !important;
             }
             .slick-dots li { margin: 0 !important; }
             .slick-dots li button:before { 
                color: #C72030 !important; 
                font-size: 8px !important;
            }
            `}
            </style>
        </div>
    )
}

