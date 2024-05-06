"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LinkButton({ title, href, margin, marginspace }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href} className={`flex h-[36px] ${margin ? "lg:ml-[75px]" : marginspace ? "ml-[45px] lg:ml-[70px] xl:ml-[90px]" : "ml-0"} px-4 py-1 w-fit transition-all delay-100 ease-in-out border-dark border text-dark hover:bg-primary hover:text-white hover:border-transparent`}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span className='text-base'>{title}</span>
            <Image src={isHovered ? "/images/home/lightArrow.svg" : "/images/home/btnArrow.svg"}
                height={12} width={12} alt='arrow' className='ml-2' />
        </Link>
    );
}

