import LocationFormCard from "@/common/locationformcard";
import Image from "next/image";

export default function Restaurants({ data }) {


    return (
        <div className='bg-[#FFF] flex '>
            <div className='w-full mx-auto  flex max-lg:items-center max-lg:justify-center  justify-between max-lg:flex-col max-lg:gap-7'>
                <div className='w-[487px] max-lg:w-full'>

                    <h1 className='text-6xl max-md:text-3xl uppercase'>{data?.locationName}</h1>
                    <div className='text-base  my-4 '>
                        <p className='text-[#7D7C7C] text-xs font-semibold'>CONNECTIVITY</p>
                        <p className='pt-4'>{data.location1}</p>
                        <p>{data.location2}</p>
                        <p>{data.location3}</p>
                    </div>
                    <div className='flex flex-wrap max-md:w-[300px] md:w-full gap-4'>
                        {data?.connectivityAmenities?.map((item, i) => <div className='flex mt-7  items-center justify-center ' key={i}>
                            <Image src={item.img} height={40} width={35} alt='exploreSvg' className='mr-2' />
                            <p className='text-xs  px-1 w-[95px]'>{item.title}</p>
                        </div>)}
                    </div>
                </div>
                {(data?.locationName === "Westport" || data?.locationName === "Sai radhe") ? null : <div className="flex flex-col order-1 h-fit sm:order-2 bg-bglight1 p-6 md:p-12 lg:w-1/2 justify-center">
                    <LocationFormCard />
                </div>}
            </div>
        </div>
    )
}
