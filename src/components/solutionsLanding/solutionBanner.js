import Image from 'next/image';
import React from 'react';

export default function SolutionBanner() {
    return (
        <div className='bg-[#F6F4EE] '>
            <div className='my-20'>
                <div className='flex  md:flex-row'>
                    <div className='w-full md:w-1/2 flex justify-center items-center flex-col md:px-16 py-20'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight font-medium max-w-md md:max-w-none'>
                            Find the space that feels truly yours
                        </h2>
                        <div>
                            <p className='pt-6 text-base text-center md:text-left'>Explore workspaces that speak to your workstyle. From private floors to personal desks in vibrant coworking spaces with the best facilities, we have everything you need to build your dream. Super flexible, with minimum three-month contracts, now there’s nothing stopping you from working towards your dream.</p>
                        </div>
                    </div>
                    <div className='w-full h-[100vh] md:w-1/2  '>
                        <Image 
                            src="/images/solutionsLanding/banner.png" 
                            alt="solution-page" 
                            height={900} 
                            width={895}  
                            className='h-full w-full'
                           
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
