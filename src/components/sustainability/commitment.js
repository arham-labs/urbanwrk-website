import Image from 'next/image'

export default function Commitment() {
    return (
        <div className="px-6 py-14 lg:py-20 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px] flex flex-col lg:flex-row items-start">
            <div className="flex flex-col w-full lg:w-[65%]">
                <div className="w-full lg:w-[91%] 2xl:w-[72%]">
                    <p className="text-sm 2xl:text-base leading-6 mb-6">Our commitment to sustainability is exemplified through our Platinum Rated Green Interiors, which represent the highest standard in environmentally responsible building practices.  We minimise ecological impact and ensure that our workspaces support the well-being of our clients and contribute positively to the environment.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {Array(4).fill("").map((_, i) =>
                            <div className="flex flex-col border-b border-dark pb-4 2xl:pb-7 gap-2 2xl:gap-3">
                                <Image src="/images/about-us/home.svg" alt="image" width={100} height={100} className="w-10 mb-2 2xl:w-14" />
                                <span className="font-semibold">Breathe Easy, Work Better</span>
                                <p className="leading-6 text-sm">We prioritize air quality with our HVAC standards and indoor air quality monitors that reduce dust and pollution, and enable 30% more fresh air intake, all monitored to ensure a healthier, more natural office environment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[35%] mt-10 lg:mt-0">
                <Image src="/images/about-us/commitment.png" alt="commitment" width={800} height={800} className="w-full aspect-[7/9]" />
            </div>
        </div>)
}

