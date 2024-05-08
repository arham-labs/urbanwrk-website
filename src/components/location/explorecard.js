'use client'
import Image from "next/image";
import Concienge from '../../../public/images/locationInside/locationSpaceCardlogo4.svg'
import Cafeteria from '../../../public/images/locationInside/locationSpaceCardlogo2.svg';
import Parking from '../../../public/images/locationInside/locationSpaceCardlogo3.svg'
import Access from '../../../public/images/locationInside/locationSpaceCardlogo1.svg'
import CardImage from '../../../public/images/location/card.png'
import Map from '../../../public/images/location/map.png'
import { useParams } from "next/navigation";
import LinkButton from "@/common/linkbtn";

export default function ExploreCard() {
    const params = useParams();
    // console.log(params, 'params');


    const AmentiesData = [
        { source: Concienge, title: "Concierge Team" },
        { source: Cafeteria, title: "Cafetria" },
        { source: Parking, title: "Parking" },
        { source: Access, title: "24 X 7 Access" }
    ]

    return (
        <div className="py-16 flex flex-col lg:flex-row w-full gap-8 xl:gap-7 lg:py-20 px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
            <div className="w-full lg:w-[60%] 2xl:w-[55%] flex flex-col bg-bglight1 lg:h-fit lg:flex-row items-center">
                <div className="w-full xl:w-1/2 2xl:w-[45%]">
                    <Image src={CardImage} alt="cardimage" className="w-full h-full lg:h-[405px] object-cover aspect-[19/14] lg:aspect-[14/16]" />
                </div>
                <div className="flex flex-col p-4 xl:p-[21.5px] 2xl:px-[25px] w-full xl:w-1/2 2xl:w-[55%]">
                    <span className="text-lg lg:text-xl font-medium">Peninsula Park</span>
                    <span className="text-xs lg:text-sm text-[#7D7C7C] font-semibold mb-3 uppercase">Lower Parel</span>
                    <div className="flex flex-col text-sm font-light mb-4">
                        <span>Parel Station - 5 min walk</span>
                        <span>Best for restaurants, commute-friendly</span>
                    </div>
                    <p className="text-sm mb-5 lg:mb-3 2xl:mb-5">A thriving corporate park in the heart of Mumbai.</p>
                    <div className="grid gap-5 grid-cols-2 pb-5 border-b border-[#747474] mb-7">
                        {AmentiesData.map((el, i) =>
                            <div className="flex items-center gap-2" key={i}>
                                <Image src={el.source} className="" alt={el.title} />
                                <span className="text-xs lg:text-sm">{el.title}</span>
                            </div>
                        )}
                    </div>
                    <LinkButton title="Explore" href={`${params.location}/peninsula`} />
                </div>
            </div>
            <div className="w-full lg:w-[40%] 2xl:w-[45%]">
                <div className="flex flex-col">
                    <Image src={Map} alt="map" className="w-full mb-7" />
                    <div className='bg-bglight1 w-full py-10'>
                        <div className='flex flex-col justify-center items-center h-full '>
                            <p className='font-medium text-xl'>Want to find your space?</p>
                            <p className='mt-1'>Get in touch with us to know more.</p>
                            <div className='w-[360px]'>
                                <div className='border border-[#747474] my-5 w-full'></div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-base'>Call us Mon-Fri - 08:30-18:00</p>
                                <p className='text-base mb-2 font-medium'>+91 98765 43210 or</p>
                                <LinkButton title="Share your details" href="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

