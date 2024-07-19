import Image from 'next/image';
import React from 'react';
import ExploreBtn from './exploreBtn';
import LinkButton from '@/common/linkbtn';

export default function SolutionCard({ item }) {



  return (


    <div className='w-full relative bg-[#F6F4EE] md:rounded-lg min-h-[540px] max-md:min-h-[500px] lg:h-[590px] xl:h-[560px] 2xl:h-[540px]'>
      <div className='flex flex-col justify-between '>
        <div>
          <Image src={item.img} height={400} width={422} alt='SolutionCard' className='h-full w-full object-cover max-md:min-h-[300px] max-md:max-h-[350px] lg:h-[380px]' />
        </div>
        <div>
          <div className='flex justify-between  pb-3 pt-3 px-5'>
            <div>
              <div className='text-[22px] max-md:text-lg  leading-[1.2] '>{item.title1}</div>
              <div className='text-[22px] max-md:text-lg leading-[1.2]'>{item.title2}</div>
            </div>
            {/* <ExploreBtn btnName={"Explore"}/> */}
            {/* {console.log(item)} */}
            <LinkButton href={item?.link} title="Explore" />
          </div>
          <div className='px-5'>
            <div className='border-black border'></div>
          </div>
          <p className='text-base px-5 pt-2 pb-5 max-md:pb-1 '>{item.desc}</p>
        </div>
      </div>
      <div className='bg-primary h-3 border border-primary mt-1 bottom-0 w-full absolute'></div>
    </div>
  )
}
