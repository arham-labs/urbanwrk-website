"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const ExploreBtn = ({ btnName }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border-black border flex h-[36px] w-fit transition-all delay-75 ease-in-out hover:bg-primary hover:text-white cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
      <span className='text-base bg-transparent px-4 max-md:px-4 flex py-1 text-black hover:text-white'>
        {btnName}
        <Image
          src={isHovered ? "/images/home/lightArrow.svg" : "/images/home/btnArrow.svg"}
          height={12}
          width={12}
          alt='exploreSvg'
          className='ml-2'
        />
      </span>
    </div>
  );
}

export default ExploreBtn;
