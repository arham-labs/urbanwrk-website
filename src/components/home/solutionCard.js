import Image from 'next/image';
import React from 'react';

export default function SolutionCard({ item }) {

  return (
    <div className='w-full md:w-[100%] md:max-w-[430px] relative bg-[#F6F4EE] md:rounded-lg min-h-[557px]'>

      <div className='flex flex-col justify-between '>
        <div>
          <Image src={item.img} height={400} width={422} alt='SolutionCard' className='h-full w-full' />
        </div>
        <div>
          <div className='flex justify-between  pb-3 pt-4 px-5'>
            <div>
              <div className='text-[30px] leading-[1.2] '>{item.title1}</div>
              <div className='text-[30px] leading-[1.2]'>{item.title2}</div>
            </div>
            <div className='border-black border flex h-[36px] hover:bg-primary hover:text-white cursor-pointer'>
              <div className='text-base bg-transparent  px-8 flex  py-1 text-black hover:text-white'>Explore <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1  ' />
              </div>
            </div>

          </div>
          <div className='px-5'>
            <div className='border-black border'></div>
          </div>
          <p className='text-base px-5 pt-2 pb-5'>{item.desc}</p>
        </div>
      </div>
      <div className='bg-primary h-3 border border-primary mt-1 bottom-0 w-full absolute'></div>
    </div>
  )
}
