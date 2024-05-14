import Image from 'next/image';
import React from 'react';

export default function SolutionBanner() {
    return (
        <div className='bg-[#F6F4EE]'>
            <>
                <div className='flex flex-col lg:flex-row '>
                    <div className='max-w-[1920px] max-md:px-6 mx-auto 2xl:px-[160px] lg:pl-[100px] lg:pr-[40px] lg:w-1/2 flex justify-center flex-col md:px-8 py-16 lg:py-20  max-lg:pb-10 lg:h-[100vh]'>
                        <h2 className='text-3xl md:text-5xl lg:text-[56px] text-left leading-tight font-medium  md:max-w-none'>
                            Find the space that <span className='font-kepler lg:text-7xl max-md:font-medium md:font-normal'>feels truly yours</span> 
                        </h2>
                        <div className='pt-6 max-md:pt-4 lg:pr-[20px] xl:pr-[40px]'>
                            <p className='text-base md:text-lg text-left'>
                                Explore workspaces that speak to your workstyle. From private floors to personal desks in vibrant coworking spaces with the best facilities, we have everything you need to build your dream. Super flexible, with minimum three-month contracts, now there’s nothing stopping you from working towards your dream.
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <Image
                            src="/images/solutionsLanding/banner.png"
                            alt="solution-page"
                            height={500} 
                            width={784}
                            className='h-full w-full object-bottom'
                        />
                    </div>
                </div>
            </>
        </div>
    );
}
