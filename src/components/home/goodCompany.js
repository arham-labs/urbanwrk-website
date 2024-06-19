"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import GoodCompanySliderMobile from "./goodCompanySliderMobile";

export default function GoodCompany() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [on, SetOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let prevIndex = 0;
      const generateRandomIndex = () => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * 16);
        } while (randomIndex === prevIndex);
        prevIndex = randomIndex;
        return randomIndex;
      };
      setCurrentIndex((prevIndex) => generateRandomIndex());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      SetOn((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval2);
  }, [SetOn]);

  return (
    <div className="bg-bglight1">
      <div className="px-6 max-w-[1920px] pt-20 pb-12 max-md:pt-16 max-md:pb-20 mx-auto 2xl:pl-[160px] 2xl:pr-[140px] lg:pl-[100px] lg:pr-[60px]">
        <div className="max-lg:hidden lg:flex lg:justify-between">
          <div className="w-1/2">
            <h2 className="text-[45px] leading-[1.2]">In good</h2>
            <h2 className="text-[55px] font-kepler leading-[1.2]">company with</h2>
          </div>
          <div
            className="img-container max-lg:hidden w-full flex flex-wrap justify-center items-center"
            style={{ transition: "opacity 0.5s ease" }}
          >
            {[...Array(10)].map((_, i) => (
              <div
                className="w-[140px] mx-10 pb-10 flex flex-col justify-around"
                key={i}
              >
                <div className="flex opacity-0 fade-in-out justify-center items-center h-[150px] w-[150px]">
                  <Image
                    src={`/images/home/logoo${
                      ((currentIndex + i) % 10) + 1
                    }.svg`}
                    height={80}
                    width={80}
                    alt="logo"
                    className="w-full"
                  />
                </div>
                <div className="pt-8">
                  <div className="border-rgba(116, 116, 116, 0.60) border"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden">
          <div className="w-full text-center">
            <h2 className="text-3xl pb-1">In good</h2>
            <h2 className="text-3xl font-kepler">company with</h2>
          </div>
          <div className="pt-6">
            <GoodCompanySliderMobile />
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-container > div:nth-last-of-type(1) .border,
        .img-container > div:nth-last-of-type(2) .border {
          border: none !important;
        }
      `}</style>
    </div>
  );
}
