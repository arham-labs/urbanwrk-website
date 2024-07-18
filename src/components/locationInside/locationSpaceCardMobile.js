import LinkButton from '@/common/linkbtn'
import Image from 'next/image'
import React from 'react'

export default function LocationSpaceCardMobile({ el, location }) {
    return (
        <div className="flex flex-col bg-bglight1 lg:h-fit lg:flex-row items-center lg:w-[calc(100%-20px)]">
            <div className="w-full xl:w-1/2 2xl:w-[45%]">
                <Image src={el?.locationImg} unoptimized alt="cardimage" className="w-full h-full lg:h-[405px] object-cover aspect-[19/14] lg:aspect-[14/16]" />
            </div>
            <div className="flex flex-col p-4 xl:p-[21.5px] 2xl:px-[25px] w-full xl:w-1/2 2xl:w-[55%]">
                <span className="text-lg lg:text-xl font-medium">{el.locationName}</span>
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
    )
}
