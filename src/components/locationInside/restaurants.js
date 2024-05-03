import Image from 'next/image'
import React from 'react'
import CommonBtnKnowMore from '../home/commonBtnKnowMore'

export default function Restaurants() {

    const data = [
        { img: "/images/locationInside/locationlogo/logo1.svg", title: "WellnessWrk Gym" },
        { img: "/images/locationInside/locationlogo/logo2.svg", title: "BuzzWrk Café" },
        { img: "/images/locationInside/locationlogo/logo3.svg", title: "Visitor Management" },
        { img: "/images/locationInside/locationlogo/logo4.svg", title: "Enterprise grade IT setup" },
        { img: "/images/locationInside/locationlogo/logo5.svg", title: "Fire safety" },
        { img: "/images/locationInside/locationlogo/logo6.svg", title: "Parking" },

    ]
    return (
        <div className='bg-[#FFF] flex '>

            <div className='w-full mx-auto  flex justify-between max-md:flex-col max-md:gap-10'>
                <div className='w-[487px] max-md:w-full'>

                    <div className='text-6xl max-md:text-3xl '>Peninsula Park </div>
                    <div className='text-base  my-4 '>
                        <p className='text-[#7D7C7C] text-xs font-semibold'>CONNECTIVITY</p>
                        <p className='pt-4'>Western Line - Lower Parel: 8 minute walk</p>
                        <p>Harbour Line - Parel:  5 minutes walk</p>
                        <p>Senapati Bapat Marg: 5 minutes walk</p>
                    </div>
                    <div class='flex flex-wrap max-md:w-[300px] md:w-full gap-4'>
                        {data.map((item, i) => <div class='flex mt-7  items-center justify-center ' key={i}>
                            <Image src={item.img} height={40} width={35} alt='exploreSvg' className='mr-2' />
                            <p class='text-xs  px-1 w-[95px]'>{item.title}</p>
                        </div>)}
                    </div>
                </div>
                <div className='bg-[#F6F4EE] w-[363px] max-md:w-full max-md:py-10'>
                    <div className='flex flex-col justify-center items-center h-full '>
                        <p className='font-medium text-xl'>Want to find your space?</p>
                        <p className='mt-3'>Get in touch with us to know more.</p>
                        <div className='w-[260px]'>
                            <div className='border border-[#747474] my-5 w-full opacity-45  '></div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-base'>Call us Mon-Fri - 08:30-18:00</p>
                            <p className='text-base mb-2'>+91 98765 43210 or</p>
                            <div className='border-black border flex px-8 my-2'>
                                <button className='text-base bg-transparent  py-1 text-black '>Share your details
                                </button>
                                <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
