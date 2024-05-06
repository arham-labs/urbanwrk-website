import Image from 'next/image'
import breathe from '../../../public/images/sustainability/breathe.svg'
import right from '../../../public/images/sustainability/right.svg'
import load from '../../../public/images/sustainability/load.svg'
import home from '../../../public/images/sustainability/home.svg'
import commitmentImage from '../../../public/images/sustainability/commitment.png'

export default function Commitment() {

    const commitmentData = [
        { title: "Breathe Easy, Work Better", desc: "We prioritize air quality with our HVAC standards and indoor air quality monitors that reduce dust and pollution, and enable 30% more fresh air intake, all monitored to ensure a healthier, more natural office environment.", source: breathe },
        { title: "Use What's Right", desc: "We embrace a holistic approach to well-being, utilizing BIS-certified non-toxic materials to ensure our spaces are safe and sustainable. We foster environments that positively impact the health, quality of life, and well-being of everyone.", source: right },
        { title: "Lessen The Load", desc: "Our spaces feature energy-efficient lighting, rigorous waste management, and optimal visual and thermal comfort to enhance productivity. We elevate the everyday with olfactory and acoustic comforts.", source: load },
        { title: "Inspiring Green Spaces", desc: "We use biophilic design to foster a connection between indoor spaces and the natural world. By incorporating plant life, natural lighting, and organic materials, we improve air quality, increase comfort, and boost overall well-being.", source: home }
    ]

    return (
        <div className="px-6 py-16 lg:py-20 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] flex flex-col lg:flex-row items-start">
            <div className="flex flex-col w-full lg:w-[65%]">
                <div className="w-full lg:w-[91%] 2xl:w-[72%]">
                    <p className="text-sm xl:text-base leading-6 mb-12 lg:mb-6 font-medium">Our commitment to sustainability is exemplified through our Platinum Rated Green Interiors, which represent the highest standard in environmentally responsible building practices.  We minimise ecological impact and ensure that our workspaces support the well-being of our clients and contribute positively to the environment.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {commitmentData.map((item, i) =>
                            <div key={i} className="flex flex-col border-b border-[#747474] pb-4 2xl:pb-7 gap-2 2xl:gap-3">
                                <Image src={item.source} alt="image" className="w-10 mb-2 2xl:w-14" />
                                <span className="font-semibold text-lg xl:text-xl">{item.title}</span>
                                <p className="leading-6 text-sm">{item.desc}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[35%] mt-10 lg:mt-0 lg:h-[675px]">
                <Image src={commitmentImage} alt="commitment" className="w-full object-cover h-full aspect-[10/11] lg:aspect-[7/9]" />
            </div>
        </div>)
}

