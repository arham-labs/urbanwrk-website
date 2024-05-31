import Image from "next/image";
import React from "react";
import ExploreBtn from "./exploreBtn";
import LinkButton from "@/common/linkbtn";

export default function SolutionCard({ item }) {
  return (
    <div className="w-full md:w-[100%] md:max-w-[100%]   2xl:mx-auto  relative bg-[#FFFFFF] md:rounded-lg  mx-[10px] min-h-[500px] max-md:min-h-[460px]">
      <div className="flex flex-col justify-between ">
        <div>
          <Image
            src={item.img}
            height={400}
            width={422}
            alt="SolutionCard"
            className="h-full w-full max-md:min-h-[300px] max-md:max-h-[350px]"
          />
        </div>
        <div>
          <div className="flex justify-between  pb-3 pt-3 px-3">
            {/* <div> */}
            <div className="text-[24px] max-md:text-lg  leading-[1.2] ">
              {item.title}
            </div>
            {/* <div className='text-[24px] max-md:text-lg leading-[1.2]'>{item.title2}</div> */}
            {/* </div> */}
            {/* <ExploreBtn btnName={"Explore"} hrefLink={"/tailormade-office"}/> */}
            {/* <LinkButton href="/tailormade-office" title="Explore" /> */}
          </div>
          <div className="px-3">
            <div className="border-black border"></div>
          </div>
          <p className="text-base px-3 pb-10  pt-2  max-md:text-sm max-md:pb-1 ">
            {item.desc}
          </p>
        </div>
      </div>
      <div className="bg-primary h-3 border border-primary mt-1 bottom-0 w-full absolute"></div>
    </div>
  );
}
