"use client";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "./dropdown";
import BasicSelect from "./dropdown";
import LookingImageSlider from "./lookingImageSlider";
import ExploreBtn from "./exploreBtn";
import BasicSelectDrop from "../select";
import LinkButton from "@/common/linkbtn";

export default function ExploreCard() {
  const [hrefNav, setHrefNav] = useState("/");
  const city = ["Hyderabad", "Kolkata", "Mumbai", "Delhi", "Gurgaon", "Pune"];

  const dataCity = [
    { name: "Hyderabad", link: "/hyderabad" },
    { name: "Kolkata", link: "/kolkata" },
    { name: "Mumbai", link: "/mumbai" },
    { name: "Delhi", link: "/delhi" },
    { name: "Gurgaon", link: "/gurgaon" },
    { name: "Pune", link: "/pune" },
  ];

  const handleSelectChange1 = (val) => {
    const naviVal = dataCity.find((item) => item.name === val);
    setHrefNav(naviVal.link)
  };

  return (
    <div>
      <div className="relative h-[800px] md:h-[875px]">
        <LookingImageSlider />
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
            Leave your mark with office spaces in cities shaping the
            economy&apos;s next chapter.
          </p>
        </div>

        <div className="absolute bottom-16  md:bottom-20 inset-x-0  font-medium text-[65px] px-5 max-w-[753px] mx-auto ">
          <div className="px-10 bg-bglight1 max-md:w-full gap-10 flex-wrap py-4 relative flex justify-between   md:items-center items-start max-md:flex-col max-md:px-5 max-md:gap-2 max-md:py-6 lg:flex lg:justify-center ">
            <div className="basis-[100%] md:basis-[60%] sm:basis-[100%] w-full lg:mx-[-10px] lg:pt-[15px] pointer-events-auto">
              <BasicSelectDrop
                list={city}
                labelName="City"
                handleSelectChange={handleSelectChange1}
              />
            </div>
            <div className="basis-[100%] md:basis-[15%] sm:basis-[100%] ">
              <LinkButton disabled={hrefNav !== "/" ? "pointer-events-auto" : "pointer-events-none"} href={hrefNav} title="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
