import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UrbanTechFeat({ item }) {

  const AppData = [{ link: "https://play.google.com/store/apps/details?id=com.lockated.pms_urbanwork&pcampaignid=web_share", image: "/images/play-store.png" }, { link: "https://apps.apple.com/in/app/urbanwrk/id6740975109?platform=iphone", image: "/images/app-store.png" }]


  return (
    <div className="bg-[#fff] ">
      <div className="">
        <div className='flex lg:flex-row flex-col lg:justify-center lg:items-center'>
          <div className='lg:w-1/2 max-lg:w-full'>
            <div className='2xl:w-[70%] lg:w-[80%]  '>
              <h2 className='text-dark text-2xl pb-6 uppercase'>{item.title1}</h2>
              <p className='text-[#000] text-lg font-medium pb-3'>{item.title2}</p>
              <p className='text-[#000]'>{item.desc}</p>
              <div className='flex lg:-ml-2 pb-4'>
                {AppData.map((item, i) =>
                  <Link href={item.link} target='_blank' key={i}>
                    <Image src={item.image} alt="icon" width={100} height={100} className={`${i === 0 ? "w-[160px]" : "w-[150px]"} h-20 object-cover mix-blend-hard-light`} />
                  </Link>
                )}
              </div>
              <div className='border border-[#747474] border-b-0 '></div>
            </div>
          </div>
          <div className='lg:w-1/2 max-lg:w-full'>
            <div>
              <Image src={item.img} alt={item.alt} height={200} width={300} className='h-full w-full' unoptimized />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
