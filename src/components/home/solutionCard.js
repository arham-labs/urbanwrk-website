import Image from 'next/image';
import React from 'react';

export default function SolutionCard({item}) {

  return (
    <div className='w-full md:w-[100%] md:max-w-[430px]  bg-[#F6F4EE] md:rounded-lg'>

      <div className='flex flex-col justify-between '>
        <div>
          <Image src={item.img} height={400} width={422} alt='SolutionCard'  className='h-full w-full'/>
        </div>
        <div>
          <div className='flex justify-between items-center pb-3 pt-4 px-5'>
            <div>
              <div className='text-[30px] leading-[1.2] '>{item.title1}</div>
              <div className='text-[30px] leading-[1.2]'>{item.title2}</div>
            </div>
            <div className='flex items-center'>
              <div className=''>Explore</div>
              <Image src="/images/home/explore.svg" height={24} width={18} alt='exploreSvg' className='ml-1' />
            </div>
          </div>
          <div className='px-5'>
            <div className='border-black border'></div>
          </div>
          <p className='text-base px-5 pt-2 pb-5'>{item.desc}</p>
        </div>
      </div>
      <div className='bg-primary h-3 border border-primary mt-1'></div>
    </div>
  )
}
