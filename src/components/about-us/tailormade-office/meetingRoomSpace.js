import Image from "next/image";
import React from "react";

export default function MeetingRoomSpace({ data }) {
  return (
    <div className="py-16 lg:py-20 px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] flex flex-col gap-7 lg:gap-0 lg:flex-row items-center">
      <div className="flex flex-col w-full lg:w-1/2">
        <div className="w-full lg:w-[88%]">
          <div className="flex flex-col text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-7">
            <span className="font-medium">{data.card1_titile1}</span>
            <span className="font-kepler">{data.card1_titile2}</span>
          </div>
          <p className="leading-6 text-sm xl:text-base font-normal lg:font-medium mb-7">
            {data?.card1_titile3}
          </p>
          <ul className="text-sm flex flex-col font-medium gap-6 lg:gap-4 w-auto lg:w-[80%] list-disc ml-6 lg:ml-7">
            {data?.brandData?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2  p-5 lg:p-12">
        <Image
          src="/images/solutionsLanding/solutionsImg/meeting1.png"
          height={300}
          width={300}
          alt="img"
          className="h-full w-full"

          unoptimized
        />
      </div>
    </div>
  );
}
