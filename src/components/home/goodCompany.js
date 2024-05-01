import Image from 'next/image'
import React from 'react'
import GoodCompanySliderMobile from './goodCompanySliderMobile'

export default function GoodCompany() {

    return (
        <div>
            <div className='max-md:hidden md:flex md:justify-between'>
                <div className='w-full md:w-1/2 max-md:text-center'>
                    <h2 className='text-[45px]'>In good</h2>
                    <h2 className='text-[55px] font-kepler'>company with</h2>
                </div>
                <div className='w-full md:w-2/3  flex flex-wrap max-md:gap-10 max-md:justify-center'>
                    {[...Array(12)].map((_, i) => <>
                        <div className='w-[110px] m-4 md:m-10 flex flex-col justify-around ' key={i}>
                            <div className='flex  justify-center items-center h-[100px] w-[100px]'>
                                <Image src={`/images/home/logo${i + 1}.svg`} height={50} width={60} alt="logo" className='w-full'
                                />
                            </div>
                            <div className='pt-8  '>
                                <div className='border-rgba(116, 116, 116, 0.60) border'></div>
                            </div>
                        </div>
                    </>)}
                </div>

            </div>
            <div className='md:hidden'>
                <div className='w-full md:w-1/2 max-md:text-center'>
                    <h2 className='text-[28px] font-medium'>In good</h2>
                    <h2 className='text-[28px] font-kepler'>company with</h2>
                </div>
                <div className='mt-4 '>
                    <GoodCompanySliderMobile />
                </div>
            </div>
        </div>

    )
}