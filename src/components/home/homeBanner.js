import Image from 'next/image'
import React from 'react'

export default function HomeBanner() {
    return (
        <>
            <div className='h-[100vh] lg:hidden'>
                <Image src={"/images/home/homeBanner1.png"} alt="home banner" height={400} width={1000} className='h-full w-full object-cover' unoptimized />
            </div>
            <div className='hidden lg:block h-[100vh]'>
                <Image src={"/images/home/mobile-banner.png"} alt="home banner" height={400} width={1000} className='h-full w-full object-cover' unoptimized />
            </div>
        </>
    )
}
