
import Image from 'next/image';
import React from 'react';

export default function TechnologyBanner() {
  return (
    <div className='bg-[#F6F4EE]'>
      <>
        <div className='flex flex-col lg:flex-row lg:h-[100vh]'>
          <div className='lg:w-1/2 max-lg:h-[419px] '>
            <Image
              src="/images/uwTechnology/uwBanner.png"
              alt="team work"
              height={500}
              width={784}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='max-w-[1920px] max-md:px-6 mx-auto 2xl:px-[160px] lg:pl-[100px] lg:pr-[40px] lg:w-1/2 flex justify-center flex-col md:px-8  lg:py-20  max-lg:pb-16 max-lg:pt-14 '>
            <h1 className='text-3xl md:text-5xl lg:text-[56px] text-left leading-tight font-normal  md:max-w-none'>
            Make informed  <span className='font-kepler lg:text-7xl max-md:font-medium md:font-normal'>decisions</span>
            </h1>
            <div className='pt-6 max-md:pt-4 lg:pr-[20px] xl:pr-[40px]'>
              <p className='text-sm md:text-base lg:text-lg text-left'>
              We&#39;re a tech-powered workspace where our proprietary centralised platform and app make your work day better.
              </p>
            </div>
          </div>

        </div>
      </>
    </div>
  );
}
