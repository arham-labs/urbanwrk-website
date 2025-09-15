import Image from 'next/image'
import React from 'react'

export default function LocationSpecialtiesCard({ data }) {
    const Info = [
        { title: "Your modern, tailored workspace", desc: "From one desk to a dedicated floor, scale your office space exactly how you envision it." },
        { title: "Premium on-site services", desc: "Dedicated support team, specialty coffee bar, and fully stocked pantry keep you focused" },
        { title: "Custom office design", desc: "Professional interiors and branding that reflect your company's unique identity" },
        { title: "Beautifully designed workspaces", desc: "Stunning environments where great design meets seamless functionality" },
        { title: "Exclusive member community", desc: "Access curated events, expert panels, and workshops with India's leading business minds" },

    ]
    return (
        <div className="bg-bglight3 py-16 lg:pt-20 lg:pb-12 max-md:pb-0 ">
            <div className="px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40 flex flex-col gap-10 lg:gap-20 lg:flex-row items-center">
                <div className="w-full lg:w-[45%] aspect-square lg:h-[600px]">
                    <Image src={data?.amentiesBanner} height={100} width={100} alt={data?.amentiesBannerAlt} className="w-full object-cover h-full" unoptimized />
                </div>
                <div className="w-full lg:w-[65%]">
                    <span className="text-3xl lg:text-4xl block mb-8 lg:mb-10">Amenities</span>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 lg:gap-10">
                        {Info.map((item, i) =>
                            <div className="flex flex-col gap-1 border-b border-dark  last:border-0 last:pb-0 pb-4 lg:pb-7" key={i}>
                                <span className="font-semibold text-lg">{item.title}</span>
                                <p className="text-sm !leading-[20px]">{item.desc}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}