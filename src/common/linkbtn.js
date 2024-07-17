"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function LinkButton({ title, href, margin, marginspace }) {
  const [isHovered, setIsHovered] = useState(false);

//   console.log("href", href);

  return (
    // <Link
    //   href={href ? href : "/"}
      // className={`flex h-[36px] ${
      //   margin
      //     ? "lg:ml-[75px]"
      //     : marginspace
      //     ? "ml-[45px] lg:ml-[70px] xl:ml-[90px]"
      //     : "ml-0"
      // } px-4 py-1 w-fit transition-all delay-100 ease-in-out border-dark border text-dark hover:bg-primary hover:text-white hover:border-transparent`}
  
    // >
    //   <span className="text-base">{title}</span>
    //   <Image
    //     src={
    //       isHovered
    //         ? "/images/home/lightArrow.svg"
    //         : "/images/home/btnArrow.svg"
    //     }
    //     height={12}
    //     width={12}
    //     alt="arrow"
    //     className="ml-2"
    //   />
    // </Link>

    <div className="group">
      <Link href={href ? href : "/"}> 
        <div className={`border-black border px-4 gap-2 flex items-center h-[36px] w-fit transition-all ease-in-out group-hover:bg-primary group-hover:border-primary group-hover:text-white cursor-pointer ${
        margin
          ? "lg:ml-[75px]"
          : marginspace
          ? "ml-[45px] lg:ml-[70px] xl:ml-[90px]"
          : "ml-0"
      }`}>
          <span className="text-base bg-transparent max-md:px-4 flex py-1 text-black group-hover:text-white">
            {title}
          </span>
          <div className="bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')] bg-contain w-[14px] h-[14px] bg-no-repeat"></div>
        </div>
      </Link>
    </div>
  );
}
