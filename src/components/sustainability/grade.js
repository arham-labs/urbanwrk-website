import IGBC from '../../../public/images/sustainability/igbc.svg';
import BIS from '../../../public/images/sustainability/bis.svg';
import ASHRAE from '../../../public/images/sustainability/ashrae.svg'
import Image from 'next/image';

export default function Grade() {

    const GradeData = [
        { source: IGBC, title: "Green Interiors Certification by IGBC", subtitle: "Energy Conservation & Building Codes (2017)" },
        { source: BIS, title: "BIS certified products", subtitle: "National Building Code (2016)" },
        { source: IGBC, title: "Health & Wellbeing (WELL) Certification by IGBC", subtitle: "" },
        { source: ASHRAE, title: "Ashrae (2012) for HVAC & Indoor Air Quality", subtitle: "" }
    ]

    return (
        <div className="py-16 bg-bglight3 lg:py-20">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] flex flex-col lg:flex-row items-start gap-10 2xl:gap-20">
                <div className="w-full lg:w-[45%] 2xl:w-[45%]">
                    <div className="flex flex-col text-2xl lg:text-4xl xl:text-[45px] xl:leading-[49px] gap-1 w-full lg:w-[70%]">
                        <span className="font-medium">Enterprise grade infrastructure</span>
                        <span className="font-kepler">to power your work</span>
                    </div>
                </div>
                <div className="w-full lg:w-[60%] 2xl:w-[55%]">
                    {GradeData.map((el, i) =>
                        <div key={i} className='grid grid-cols-1 lg:grid-cols-2 font-medium lg:gap-14 2xl:gap-24 items-center'>
                            <div className={`flex gap-5 items-center ${i == 0 ? "mt-0" : "mt-7"} ${i > 2 ? "border-0 pb-0 mb-0" : "border-b border-[#7A7A7A] pb-7"}`}>
                                <Image src={el.source} alt={el.title} className='w-16' />
                                <span className='text-base lg:text-lg uppercase'>{el.title}</span>
                            </div>
                            <div className={`hidden lg:block pb-7 ${i > 0 ? "border-0 mt-7" : "border-b border-[#7A7A7A]"}`}>
                                <span className='text-lg'>{el.subtitle}</span>
                            </div>
                        </div>
                    )}
                    {GradeData.slice(0,2).map((el, i) =>
                        <div key={i} className={`pt-7 font-medium lg:hidden ${i > 0 ? "border-0" : "mt-7 border-t pb-7 border-b border-[#7A7A7A]"}`}>
                            <span className='text-base lg:text-lg'>{el.subtitle}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>)
}

