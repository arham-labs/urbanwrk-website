import Image from "next/image";
import WorkingSpace from '../../public/images/about-us/working-space.png'

export default function Speciality({ data, title }) {

    return (
        <div className="bg-bglight3">
            <div className="px-0 flex flex-col lg:gap-20 lg:flex-row items-center">
                <div className="w-full lg:w-[45%] aspect-square lg:h-[1035px] xl:h-[880px] 2xl:h-[790px]">
                    <Image src={WorkingSpace} alt="comfortable office space" className="w-full object-cover h-full" />
                </div>
                <div className="px-6 w-full lg:w-[65%] py-16 lg:pl-0 lg:py-20 mx-auto lg:pr-[100px] 2xl:pr-40">
                    <span className="text-3xl lg:text-4xl block mb-2 text-nowrap">{title}</span>
                    <span className="text-3xl lg:text-4xl block mb-8 lg:mb-10 font-kepler">work for you.</span>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 lg:gap-10">
                        {data.map((item, i) =>
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

