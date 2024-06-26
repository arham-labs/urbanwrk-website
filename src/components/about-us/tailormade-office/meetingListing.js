import LinkButton from "@/common/linkbtn";
import Image from "next/image";
import React from "react";
import Concienge from "../../../../public/images/locationInside/locationSpaceCardlogo4.svg";
import Cafeteria from "../../../../public/images/locationInside/locationSpaceCardlogo2.svg";
import Parking from "../../../../public/images/locationInside/locationSpaceCardlogo3.svg";
import Access from "../../../../public/images/locationInside/locationSpaceCardlogo1.svg";
import CustomizedSelects from "@/components/select";
import ExploreBtn from "@/components/home/exploreBtn";

export default function MeetingListing({ data, el }) {
  const AmentiesData = [
    { source: Concienge, title: "Concierge Team" },
    { source: Cafeteria, title: "Cafetria" },
    { source: Parking, title: "Parking" },
    { source: Access, title: "24 X 7 Access" },
  ];

  const city = [];
  const handleSelectChange = () => {};

  return (
    <div className="pb-16  px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] flex flex-col gap-7 lg:gap-0 lg:flex-row ">
      <div className="flex flex-col w-full lg:w-1/2 ">
        <div className="max-lg:w-full xl:w-[582px] lg:w-[450px] bg-bglight1 flex justify-center  px-2 flex-wrap">
          <div className="max-lg:w-full xl:w-[460px] lg:w-[400px] py-10 px-3">
            <p className="font-bold text-[14px]">LOCATION:</p>
            <CustomizedSelects list={[]} />
            <div className="flex lg:gap-5 max-lg:flex-col">
              <div className="w-full">
                <p className="font-bold text-[14px]">FROM:</p>
                <CustomizedSelects list={[]} />
              </div>
              <div className="w-full  ">
                <p className="font-bold text-[14px]">TO:</p>
                <CustomizedSelects list={[]} />
              </div>
            </div>
            <div>
              <p className="font-bold text-[14px]">NO OF PEOPLE:</p>
              <input className="border-black border-solid border w-full h-[38px] bg-bglight1 " />
            </div>
            <div className="flex pt-5 gap-5">
              <ExploreBtn btnName={"Apply"} />
              <ExploreBtn btnName={"Clear"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 gap-6  lg:px-12">
        {[...Array(1)].map((_, i) => (
          
            <div key={i}>
              <div className="flex flex-col bg-bglight1 lg:h-fit lg:flex-row items-center">
                <div className="w-full xl:w-1/2 2xl:w-[45%]">
                  <Image
                    src={"/images/solutionsLanding/meetingImg2.png"}
                    alt="cardimage"
                    width={300}
                    height={300}
                    className="w-full h-full lg:h-[405px] object-cover aspect-[19/14] lg:aspect-[14/16]"
                  />
                </div>
                <div className="flex flex-col p-4 xl:p-[21.5px] 2xl:px-[25px] w-full xl:w-1/2 2xl:w-[55%] bg-bglight1">
                  <span className="text-lg lg:text-xl font-medium">
                    {el.locationName}
                  </span>
                  <span className="text-xs lg:text-sm text-[#7D7C7C] font-semibold mb-3 uppercase">
                    {el.locationName}
                  </span>
                  <div className="flex flex-col text-sm font-light mb-4">
                    <span>{el.location1}</span>
                    <span>{el.location2}</span>
                  </div>
                  <p className="text-sm mb-5 lg:mb-3 2xl:mb-5">
                    {el.location3}
                  </p>
                  <div className="grid gap-5 grid-cols-2 pb-5 border-b border-[#747474] mb-7">
                    {AmentiesData.map((el, i) => (
                      <div className="flex items-center gap-2" key={i}>
                        <Image
                          src={el.source}
                          className=""
                          alt={el.title}
                          width={30}
                          height={30}
                        />
                        <span className="text-xs lg:text-sm">{el.title}</span>
                      </div>
                    ))}
                  </div>
                  <LinkButton title="Book" href={`Book/peninsula`} />
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}
