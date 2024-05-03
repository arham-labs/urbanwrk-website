import Image from 'next/image'
import React from 'react'

export default function LocationAmenities() {
  const data1 = [
    {
      title: "Your modern, tailormade office",
      desc: "From one desk to a dedicated floor, you can  create your space the way you want."
    },

    {
      title: "Made with your blueprint",
      desc: "From one desk to a dedicated floor, you can  create your space the way you want."
    },

  ]


  const data2 = [
    {
      title: "With 5-Star hospitality",
      desc: "From one desk to a dedicated floor, you can  create your space the way you want."
    },

    {
      title: "Uplifting spaces",
      desc: "From one desk to a dedicated floor, you can  create your space the way you want."
    },]
  return (

    <div className="py-16 bg-bglight3 lg:py-20 max-md:hidden">
      <div className='flex  w-full gap-[30px]'>
        <div className='w-1/2 '>
          <Image src="/Images/locationInside/locationAmenities.png" alt="explore" height={1000} width={1000} className='w-full h-full pr-12' />
        </div>
        <div className=' flex-col'>
    <div>
        <h2 className='text-[45px] text-center'>Amenities</h2>
    </div>
    <div className='flex flex-wrap gap-[30px] justify-center  '>
        <div className='w-[40%]'>
            {data1.map((item, i) => (
                <div key={i} className='flex flex-col'>
                    <div className='font-medium text-xl pt-12'>{item.title}</div>
                    <div className='text-sm pt-2'>{item.desc}</div>
                    <div className='border-b border-[#7A7A7A] pt-12 w-[90%]'></div>
                </div>
            ))}
            <div className='flex flex-col'>
                <div className='font-medium text-xl pt-12'>Your modern, tailormade office</div>
                <div className='text-sm pt-2'>From one desk to a dedicated floor, you can create your space the way you want.</div>
            </div>
        </div>
        <div className='w-[40%]'>
            {data2.map((item, i) => (
                <div key={i} className='flex flex-col'>
                    <div className='font-medium text-xl pt-12'>{item.title}</div>
                    <div className='text-sm pt-2'>{item.desc}</div>
                    <div className='border-b border-[#7A7A7A] pt-12 w-[90%]'></div>
                </div>
            ))}
        </div>
    </div>
</div>

      </div>

    </div>
  )
}
