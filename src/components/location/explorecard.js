'use client'
import Image from "next/image";
import Map from '../../../public/images/location/map.png'
import { useParams } from "next/navigation";
import LinkButton from "@/common/linkbtn";

export default function ExploreCard({ data }) {
    const params = useParams();
    // console.log(params, 'params');

    return (
        <div className="py-16 flex flex-col lg:flex-row w-full gap-8 xl:gap-7 lg:py-20 px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] ">
            <div className="w-full lg:w-[60%] 2xl:w-[55%]  flex flex-col gap-7">
                {data?.locationInfo?.map((el, i) =>
                    <div key={i} className="flex flex-col bg-bglight1 lg:h-fit lg:flex-row items-center">
                        <div className="hidden lg:block xl:w-1/2 2xl:w-[45%]">
                            <Image src={el?.locationImg} unoptimized alt="cardimage" className="w-full h-[405px] object-cover aspect-[11/12]" />
                        </div>
                        <div className="w-full lg:hidden">
                            <Image src={el?.locationMobileImg} width={500} height={500} unoptimized alt="cardimage" className="w-full h-full object-cover aspect-[23/17]" />
                        </div>
                        <div className="flex flex-col p-4 xl:p-[21.5px] 2xl:px-[25px] w-full xl:w-1/2 2xl:w-[55%]">
                            <span className="text-lg lg:text-xl font-medium uppercase">{el.locationName}</span>
                            <span className="text-xs lg:text-sm text-[#7D7C7C] font-semibold mb-3 uppercase">{el.locationCity}</span>
                            <div className="flex flex-col text-sm font-light mb-4">
                                <span>{el.location1}</span>
                                <span>{el.location2}</span>
                            </div>
                            <p className="text-sm mb-5 lg:mb-3 2xl:mb-5">{el.location3}</p>
                            <div className="grid gap-5 grid-cols-2 pb-5 border-b border-[#747474] mb-7">
                                {el?.AmentiesData?.map((el, i) =>
                                    <div className="flex items-center gap-2" key={i}>
                                        <Image src={el.source} className="w-6 h-6" alt={el.title} />
                                        <span className="text-xs lg:text-sm">{el.title}</span>
                                    </div>
                                )}
                            </div>
                            <LinkButton title="Explore" href={`${el.url}`} />
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full lg:w-[40%] 2xl:w-[45%]">
                <div className="flex flex-col">
                    {/* <Image src={Map} alt="map" className="w-full mb-7" /> */}
                    <div className='bg-bglight1 w-full py-10'>
                        <div className='flex flex-col justify-center items-center h-full '>
                            <p className='font-medium text-xl'>Want to find your space?</p>
                            <p className='mt-1'>Get in touch with us to know more.</p>
                            <div className='w-[360px]'>
                                <div className='border border-[#747474] my-5 w-full'></div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-base'>Call us Mon-Fri - 08:30-18:00</p>
                                <p className='text-base mb-2 font-medium'>+91 8399959996</p>
                                {/* <LinkButton title="Share your details" href="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

