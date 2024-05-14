import Image from "next/image";
import React from "react";
import Dropdown from "./dropdown";
import BasicSelect from "./dropdown";
import LookingImageSlider from "./lookingImageSlider";
import ExploreBtn from "./exploreBtn";
import BasicSelectDrop from "../select";

export default function ExploreCard() {
  const city = ["Mumbai", "Pune", "Nagpur"];
  const solution = [
    "Tailormade Offices",
    "Ready-To-Work In Offices",
    "Meeting Rooms",
  ];
  return (
    <div>
      <div className="relative h-[800px] md:h-[875px] ">
        <div>
          {/* <Image src="/images/home/exploreCard3.png" height={836} width={422} alt="exploreCard" className='h-[100vh] w-full object-top' unoptimized /> */}
          <LookingImageSlider />
        </div>
        <div className="absolute  top-14   md:top-20 inset-x-0 flex justify-center items-center font-medium text-6xl max-md:text-[28px] max-md:tracking-[-0.56px]">
          <div>
            What are you{" "}
            <span className="font-kepler max-md:text-[28px] text-6xl ">
              looking for?
            </span>
          </div>
        </div>
        <div className="absolute md:bottom-40  bottom-80    inset-x-0 flex justify-center items-center font-medium text-[65px]">
          <p className="text-[30px] md:py-20 text-white md:w-[753px]  text-center max-md:text-[20px] max-md:mx-4 max-md:leading-[30px]">
            Leave your mark with office spaces in cities that are, shaping the
            economy&apos;s next chapter.
          </p>
        </div>

        <div className="absolute bottom-16  md:bottom-20 inset-x-0  font-medium text-[65px] px-5 max-w-[850px] mx-auto ">
          <div className="px-10 bg-bglight1 max-md:w-full gap-10 flex-wrap py-4 relative flex justify-between   md:items-center items-start max-md:flex-col max-md:px-5 max-md:gap-6 max-md:py-6 ">
            <div className="basis-[100%] md:basis-[30%] sm:basis-[100%] w-full mx-[-10px]">
              <BasicSelectDrop list={city} labelName="City" />
            </div>
            <div className="basis-[100%] md:basis-[30%] sm:basis-[100%] w-full mx-[-10px]">
              <BasicSelectDrop list={solution} labelName="Solution" />
            </div>
            <div className="basis-[100%] md:basis-[15%] sm:basis-[100%] ">
              <ExploreBtn btnName={"Explore"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
