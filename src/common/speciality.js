import Image from "next/image";
import WorkingSpace from '../../public/images/about-us/working-space.png'

export default function Speciality({ data, title }) {

    return (
        <div className="bg-bglight3 py-16 lg:py-20">
            <div className="px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40 flex flex-col gap-10 lg:gap-20 lg:flex-row items-center">
                <div className="w-full lg:w-[45%] aspect-square lg:h-[600px]">
                    <Image src={WorkingSpace} alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="w-full lg:w-[65%]">
                    <span className="text-3xl lg:text-4xl block mb-8 lg:mb-10">{title}</span>
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

