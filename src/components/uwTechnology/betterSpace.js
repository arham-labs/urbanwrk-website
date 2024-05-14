import betterSpace1 from '../../../public/images/uwTechnology/betterSpace1.svg'
import betterSpace2 from '../../../public/images/uwTechnology/betterSpace2.svg'
import betterSpace3 from '../../../public/images/uwTechnology/betterSpace3.svg'
import Image from 'next/image';

export default function BetterSpace() {

    const GradeData = [
        { source: betterSpace1, title: "HID Access Control System", subtitle: "Dual Internet Service Providers" },
        { source: betterSpace2, title: "Palo Alto Firewall", subtitle: "Wireless Presentations" },
        { source: betterSpace3, title: "CISCO MERAKI Networking Switches CISCO MERAKI Wi-Fi", subtitle: "Interactive TV" }
    ]

    return (
        <div className="py-16 bg-bglight3 lg:py-20">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] flex flex-col lg:flex-row items-start gap-10 2xl:gap-20">
                <div className="w-full lg:w-[45%] 2xl:w-[45%]">
                    <div className="flex flex-col text-2xl lg:text-4xl xl:text-[45px] xl:leading-[49px] gap-1 w-full lg:w-[90%]">
                        <span className="font-normal">Better spaces that are fully compliant with  <span className="font-kepler  text-[32px] lg:text-[44px] xl:text-[53px] leading-[1.2]">the highest standards</span></span>
                       
                    </div>
                </div>
                <div className="w-full lg:w-[60%] 2xl:w-[55%]">
                    {GradeData.map((el, i) =>
                        <div key={i} className='grid grid-cols-1 lg:grid-cols-2 font-medium lg:gap-14 2xl:gap-24 items-center'>
                            <div className={`flex gap-5 items-center ${i == 0 ? "mt-0" : "mt-7"} ${i > 1 ? "border-0 pb-0 mb-0" : "border-b border-[#7A7A7A] pb-7"}`}>
                                <Image src={el.source} alt={el.title} className='w-16' />
                                <span className='text-base lg:text-lg uppercase'>{el.title}</span>
                            </div>
                            
                            <div className={`hidden lg:block   gap-5 items-center ${i == 0 ? "mt-0" : "mt-7"} ${i > 1 ? "border-0 pb-0 mb-0" : "border-b border-[#7A7A7A] pb-[56px] pt-[15px] "} `}>
                              
                                <span className='text-base lg:text-lg uppercase pt-2'>{el.subtitle}</span>
                            </div>
                         

                        </div>
                    )}
                    {GradeData.slice(0, 2).map((el, i) =>
                        <div key={i} className={`pt-7 font-medium lg:hidden ${i > 0 ? "border-0" : "mt-7 border-t pb-7 border-b border-[#7A7A7A]"}`}>
                            <span className='text-base lg:text-lg'>{el.subtitle}</span>
                        </div>
                    )}
                    <div  className={`pt-7 font-medium lg:hidden ${  "mt-7 border-t pb-7  border-[#7A7A7A]"}`}>
                            <span className='text-base lg:text-lg'>Interactive TV</span>
                        </div>
                </div>
            </div>
        </div>)
}



