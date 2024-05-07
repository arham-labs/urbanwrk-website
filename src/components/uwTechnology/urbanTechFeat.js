import Image from 'next/image'
import React from 'react'

export default function UrbanTechFeat({item}) {
  return (
    <div className="bg-[#fff] ">
      <div className=" pt-20">
        <div className='flex lg:flex-row  justify-center items-center'>
          <div className='w-1/2'>
            <div className='2xl:w-[70%] lg:w-[80%]  '>
              <h2 className='text-dark text-2xl pb-6 uppercase'>{item.title1}</h2>
              <p className='text-[#000] text-lg font-medium pb-3'>{item.title2}</p>
              <p className='text-[#000] pb-7'>{item.desc}</p>
              <div className='border border-[#747474] border-b-0 '></div>
            </div>
          </div>
          <div className='w-1/2'>
            <div>
              <Image src={item.img} alt="urban spce" height={200} width={300} className='h-full w-full' unoptimized />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}
