import Image from "next/image";

export default function Vision() {
    return (
        <div className="bg-bglight1 py-[60px] md:py-[100px] text-secondary px-6 md:px-0 flex flex-col justify-center">
            <div className="w-full md:w-[90%] lg:w-[84%] md:m-auto">
                <h2 className="text-2xl mb-20 uppercase">The Team Behind the vision</h2>
                <div className="flex flex-col items-center mb-10 lg:mb-32 md:flex-row md:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 md:w-[45%] md:aspect-square md:mb-0">
                        <Image src="/images/about-us/anuj.png" width={900} height={900} alt="image" className="w-full object-cover h-full" />
                    </div>
                    <div className="md:w-[60%]">
                        <div className="w-full lg:w-[75%] m-auto">
                            <span className="uppercase text-xl block mb-1 lg:mb-6 lg:text-2xl font-medium xl:text-3xl">ANUJ MUNOT</span>
                            <p className="leading-6 text-sm md:text-base">With two decades of experience in the luxury real estate sector with Kalpataru, Anuj has led the development of nearly 40 million sq ft of premium real estate with exceptional design, flawless execution, and business excellence.His visionary response to the shift to a shared economy has led to the creation of UrbanWrk transforming enterprise-managed workspaces with a blend of design and sustainability. Guided by the ethos 'Find your space, leave your mark,' Anuj offers a unique proposition for today's entrepreneurs- office spaces that meet their every need and give them the headspace to focus on their vision.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-10 lg:mb-32 md:flex-row-reverse md:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 md:w-[45%] md:aspect-square md:mb-0">
                        <Image src="/images/about-us/harsh.png" width={900} height={900} alt="image" className="w-full object-cover h-full" />
                    </div>
                    <div className="md:w-[60%]">
                        <div className="w-full lg:w-[75%] m-auto ml-5">
                            <span className="uppercase text-xl block mb-1 lg:mb-6 lg:text-2xl font-medium xl:text-3xl">HARSH MEHTA</span>
                            <p className="leading-6 text-sm md:text-base">Harsh’s journey with Honeywell Automation and Havells as well as his entrepreneurial ventures have honed his skill in building strategic relationships. At the helm of UrbanWrk, his approach involves nurturing long-term customer relationships, managing stakeholders like brokers and landlords to foster a mutually beneficial ecosystem, and focusing on strategic business development and growth. Harsh's unique blend of industry insight and operational prowess positions him as a key player in shaping future working environments.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 md:w-[45%] md:aspect-square md:mb-0">
                        <Image src="/images/about-us/abbishek.png" width={900} height={900} alt="image" className="w-full object-cover h-full" />
                    </div>
                    <div className="md:w-[60%]">
                        <div className="w-full lg:w-[75%] m-auto">
                            <span className="uppercase text-xl block mb-1 lg:mb-6 lg:text-2xl font-medium xl:text-3xl">Abbishek Sharma</span>
                            <p className="leading-6 text-sm md:text-base">Abbishek’s extensive experience, garnered from roles at leading firms like Brookfield, CBRE, Cushman & Wakefield, and Colliers, has equipped him witha global perspective that establishes him as a strategic player in revenue maximization and operational optimization. He is steering UrbanWrk towards pioneering tomorrow's workspaces with a vision that focuses on crafting spaces that are forward-thinking and incubators for industries of the future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

