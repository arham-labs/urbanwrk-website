import Image from "next/image";
import Anuj from '../../../public/images/about-us/anuj.png'
import Harsh from '../../../public/images/about-us/harsh.png'
import Abbishek from '../../../public/images/about-us/abbishek.png'
import LinkedIn from '../../../public/images/about-us/linkedin.svg'
import Link from "next/link";

export default function Vision() {
    return (
        <div className="bg-bglight1 py-[60px] lg:py-[100px] text-secondary">
            <div className="px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40 flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl mb-12 text-center lg:text-left lg:mb-20 uppercase">The Team Behind the vision</h2>
                <div className="flex flex-col items-center lg:items-end mb-10 lg:mb-32 lg:flex-row lg:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 lg:w-[45%] lg:aspect-square lg:mb-0">
                        <Image src={Anuj} alt="ANUJ MUNOT" className="w-full object-cover h-full" />
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <div className="w-full lg:w-[75%] m-auto">
                            <span className="uppercase text-xl block mb-2 lg:mb-4 lg:text-2xl font-medium border-b border-primary pb-5 w-[200px]">ANUJ MUNOT</span>
                            <p className="!leading-6 text-sm xl:text-base font-medium mb-3">Anuj&#39;s experience of twenty years in the luxury real estate sector has cemented his reputation as an insightful strategist. As part of the leadership team at Kalpataru, with a proven track record focused on exceptional designs, impeccable execution, and business excellence, he has led the creation of nearly 40 million sq ft of real estate. Having worked with the best, he recognised a shift towards a shared economy and has set his sights on redefining real estate norms. With UrbanWrk, Anuj is revolutionising enterprise-managed workspaces, infusing them with design and sustainability. This venture offers a unique proposition for today&#39;s entrepreneurs- bespoke offices that meet their every need and give them the headspace to focus on their vision. Anuj has the ability to anticipate market shifts and craft solutions that resonate with evolving consumer desires. His leadership continuously pushes the boundaries of traditional real estate, merging luxury with practicality and driving transformative change in the industry.</p>
                            <a target="_blank" href="https://www.linkedin.com/in/anujmunot/">
                                <Image src={LinkedIn} alt="logo" className="w-[30px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end lg:flex-row-reverse lg:gap-10 xl:gap-0">
                    <div className="aspect-[13/16] w-full mb-7 lg:w-[45%] lg:aspect-square lg:mb-0">
                        <Image src={Harsh} alt="HARSH MEHTA" className="w-full object-cover h-full" />
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <div className="w-full lg:w-[75%] 2xl:w-[60%]">
                            <span className="uppercase text-xl block mb-2 lg:mb-4 lg:text-2xl font-medium border-b border-primary pb-5 w-[200px]">HARSH MEHTA</span>
                            <p className="!leading-6 text-sm xl:text-base font-medium mb-3">Harsh&#39;s career, rooted in a blend of customer focus, strategic stakeholder management, and innovative business growth, reflects his deep understanding of the evolving real estate landscape. His journey from Honeywell, Havells, through launching H&S Innovations showcases his entrepreneurial spirit shaped by his family&#39;s real estate background. Harsh&#39;s unique blend of industry insight and operational prowess positions him as a key player in shaping future working environments with UrbanWrk.</p>
                            <a target="_blank" href="https://www.linkedin.com/in/harsh-mehta-1b138b28/">
                                <Image src={LinkedIn} alt="logo" className="w-[30px]" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col items-center lg:items-end lg:flex-row lg:gap-10 xl:gap-0">
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
                </div> */}
            </div>
        </div>)
}

