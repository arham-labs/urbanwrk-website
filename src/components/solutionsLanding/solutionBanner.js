import Image from 'next/image';
import React from 'react';

export default function SolutionBanner() {
    return (
        <div className='bg-[#F6F4EE]'>
            <>
                <div className='flex flex-col md:flex-row '>
                    <div className='max-w-[1920px] max-md:px-6 mx-auto 2xl:px-[160px] lg:px-[120px] md:w-1/2 flex justify-center flex-col md:px-8 py-10 md:py-20'>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl text-left leading-tight font-medium max-w-md md:max-w-none'>
                            Find the space that <span className='font-kepler'>feels truly yours</span> 
                        </h2>
                        <div className='pt-6'>
                            <p className='text-base md:text-lg text-left'>
                                Explore workspaces that speak to your workstyle. From private floors to personal desks in vibrant coworking spaces with the best facilities, we have everything you need to build your dream. Super flexible, with minimum three-month contracts, now there’s nothing stopping you from working towards your dream.
                            </p>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <Image
                            src="/images/solutionsLanding/banner.png"
                            alt="solution-page"
                            height={500} // Adjust height for smaller screens
                            width={784}
                            className='h-full w-full'
                        />
                    </div>
                </div>
            </>
        </div>
    );
}
