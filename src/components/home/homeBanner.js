import Image from 'next/image'
import React from 'react'

export default function HomeBanner() {
    return (
        <div>
            <div className='h-[100vh]'>
                <Image src={"/Images/home/homeBanner.png"} alt="home banner" height={400} width={1000} className='h-full w-full object-cover' unoptimized />
            </div>
        </div>
    )
}
