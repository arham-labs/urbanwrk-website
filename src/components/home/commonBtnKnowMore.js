import Image from 'next/image'
import React from 'react'

export default function CommonBtnKnowMore({ btnName }) {
  return (
    <div>
      <div className='border-black border flex px-8 my-1 h-[36px] w-fit'>

        <button className='text-base bg-transparent  py-1 text-black '>{btnName}
        </button>
        <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
      </div>
    </div>
  )
}
