import Image from 'next/image'
import React from 'react'

export default function LocationSpecialtiesCard({ data }) {
    const Info = [
        { title: "Your modern, tailormade office", desc: "From one desk to a dedicated floor, you can create your space the way you want" },
        { title: "With deluxe hospitality", desc: "Enjoy on-site support team, coffee bar and a fully stocked pantry." },
        { title: "Made with your blueprint", desc: "Create a home for your brand based on your vision with our design and interiors solution" },
        { title: "Uplifting spaces", desc: "Work in a visually stunning environment where form meets function" },
        { title: "Feed your curiosity", desc: "Attend exclusive member events and panel talks or sign up for courses and workshops from India’s finest business minds" },

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