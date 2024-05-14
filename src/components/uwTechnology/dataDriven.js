import React from 'react'
import UrbanTechFeat from './urbanTechFeat'

export default function DataDriven() {
    const data = [{
        img: "/images/uwTechnology/urbanTechFeat1.png",
        title1: "THE URBANWRK MOBILE APP",
        title2: "Get actionable insights",
        desc: "Explore a consolidated view of your busiest days, occupancy trends, headcount and low footfall spaces to maximise efficiency."
    },
    {
        img: "/images/uwTechnology/urbanTechFeat2.png",
        title1: "THE HEALTHWRK ENGINE",
        title2: "Keep work running smoothly",
        desc: "Check your workspace's operational health with our smart solution that connects every aspect of your space to enable better asset and facility management."
    },
    {
        img: "/images/uwTechnology/urbanTechFeat3.png",
        title1: "THE PEOPLEWRK APP",
        title2: "Elevate every day",
        desc: "Deploy an end-to-end solution including face recognition, guest management to helpdesk and revolutionise your team's workday."
    },
    {
        img: "/images/uwTechnology/urbanTechFeat4.png",
        title1: "DESIGN STUDIO",
        title2: "Blend creativity and compliance",
        desc: "Our proprietary technology platform offers instant, customisable design solutions that align with the highest aesthetics and adhere to all regulations."
    },
    ] 
    return (

        <div className="bg-[#FFF] ">
            <div className="px-6 max-w-[1920px] py-20 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[100px]">

                <div className=' flex flex-col lg:flex-row '>
                    <div className='  justify-center lg:w-1/2 flex flex-col'>
                        <div>
                            <h2 className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-left leading-tight font-normal  md:max-w-none'>
                                Data-driven
                            </h2>
                            <h2 className='font-kepler text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] leading-[1.2] '>workspaces</h2>
                        </div>

                    </div>
                    <div className='lg:w-1/2 flex items-center '>
                        <div className='pt-6 max-md:pt-4 lg:pr-[20px] xl:pr-[40px] w-[477px]'>
                            <p className='text-base md:text-xl text-left'>
                                Make everything from your morning coffee to your big presentation smooth with our advanced set of proprietary tools. From real-time insights and peak performance monitoring, do it all faster, smarter and with more control than ever before.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {data.map((item, i) => <UrbanTechFeat key={i} item={item} />
                    )}
                </div>

            </div>
        </div>
    )
}
