import Image from 'next/image'
import React from 'react'

export default function GoodCompany() {
    return (
        <div className='flex justify-between'>
            <div className='w-1/2'>
                <h2 className='text-[45px]'>In good</h2>
                <h2 className='text-[55px] font-kepler'>company with</h2>
            </div>
            <div className='w-2/3  flex flex-wrap '>
                {[...Array(12)].map((_, i) => <>
                    <div className='w-[110px]  m-10 flex flex-col justify-between ' key={i}>
                        <div className='flex  justify-center items-center'>
                            <Image src={`/images/home/logo${i+1}.svg`} height={50} width={60} alt="logo" />
                        </div>
                        <div className='pt-8  '>
                            <div className='border-rgba(116, 116, 116, 0.60) border'></div>
                        </div>
                    </div>
                </>)}
            </div>

        </div>
    )
}
