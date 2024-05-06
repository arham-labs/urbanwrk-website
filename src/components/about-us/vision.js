import Image from "next/image";
import Anuj from '../../../public/images/about-us/anuj.png'
import Harsh from '../../../public/images/about-us/harsh.png'
import Abbishek from '../../../public/images/about-us/abbishek.png'
import LinkedIn from '../../../public/images/about-us/linkedin.svg'

export default function Vision() {
    return (
        <div className="bg-bglight1 py-[60px] lg:py-[100px] text-secondary">
            <div className="px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40 flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl mb-12 text-center lg:text-left lg:mb-20 uppercase">The Team Behind the vision</h2>
                <div className="flex flex-col items-center lg:items-end mb-10 lg:mb-32 lg:flex-row lg:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 lg:w-[45%] lg:aspect-square lg:mb-0">
                        <Image src={Anuj} alt="image" className="w-full object-cover h-full" />
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <div className="w-full lg:w-[75%] m-auto">
                            <span className="uppercase text-xl block mb-2 lg:mb-4 lg:text-2xl font-medium border-b border-primary pb-5 w-[200px]">ANUJ MUNOT</span>
                            <p className="!leading-6 text-sm xl:text-base font-medium mb-3">With two decades of experience in the luxury real estate sector with Kalpataru, Anuj has led the development of nearly 40 million sq ft of premium real estate with exceptional design, flawless execution, and business excellence.His visionary response to the shift to a shared economy has led to the creation of UrbanWrk transforming enterprise-managed workspaces with a blend of design and sustainability. Guided by the ethos &#39;Find your space, leave your mark,&#39; Anuj offers a unique proposition for today&#39;s entrepreneurs- office spaces that meet their every need and give them the headspace to focus on their vision.</p>
                            <Image src={LinkedIn} alt="logo" className="w-[30px]" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end mb-10 lg:mb-32 lg:flex-row-reverse lg:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 lg:w-[45%] lg:aspect-square lg:mb-0">
                        <Image src={Harsh} alt="image" className="w-full object-cover h-full" />
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <div className="w-full lg:w-[75%] 2xl:w-[60%]">
                            <span className="uppercase text-xl block mb-2 lg:mb-4 lg:text-2xl font-medium border-b border-primary pb-5 w-[200px]">HARSH MEHTA</span>
                            <p className="!leading-6 text-sm xl:text-base font-medium mb-3">Harsh&#39;s journey with Honeywell Automation and Havells as well as his entrepreneurial ventures have honed his skill in building strategic relationships. At the helm of UrbanWrk, his approach involves nurturing long-term customer relationships, managing stakeholders like brokers and landlords to foster a mutually beneficial ecosystem, and focusing on strategic business development and growth. Harsh&#39;s unique blend of industry insight and operational prowess positions him as a key player in shaping future working environments.</p>
                            <Image src={LinkedIn} alt="logo" className="w-[30px]" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end lg:flex-row lg:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 lg:w-[45%] lg:aspect-square lg:mb-0">
                        <Image src={Abbishek} alt="image" className="w-full object-cover h-full" />
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <div className="w-full lg:w-[75%] m-auto">
                            <span className="uppercase text-xl block mb-2 lg:mb-4 lg:text-2xl font-medium border-b border-primary pb-5 w-[260px]">Abbishek Sharma</span>
                            <p className="!leading-6 text-sm xl:text-base font-medium mb-3">Abbishek&#39;s extensive experience, garnered from roles at leading firms like Brookfield, CBRE, Cushman & Wakefield, and Colliers, has equipped him witha global perspective that establishes him as a strategic player in revenue maximization and operational optimization. He is steering UrbanWrk towards pioneering tomorrow&#39;s workspaces with a vision that focuses on crafting spaces that are forward-thinking and incubators for industries of the future.</p>
                            <Image src={LinkedIn} alt="logo" className="w-[30px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

