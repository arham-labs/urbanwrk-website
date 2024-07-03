"use client";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import ExploreBtn from "./home/exploreBtn";
import { Checkbox } from "@mui/material";
import BasicSelectDrop from "./select";

export default function Chat() {
  const [openchat, setOpenChat] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);

    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      console.log("submit", response);
      setShowPopup(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    setShowPopup(false);
    reset(); 
  };


  return (
    <div>
      <div className="fixed bottom-10 right-7 lg:bottom-10 lg:right-16 z-30">
        <a
          className="cursor-pointer chat-shadow hover-card"
          onClick={() => setOpenChat(!openchat)}
        >
          <Image
            src="/images/chat.svg"
            alt="chat"
            className="w-[55px] lg:w-[70px] h-auto"
            width={150}
            height={150}
          />
        </a>
        {/* <div className={`bg-accent fixed hidden ${openchat ? "hidden lg:hidden" : "block"} card lg:block chat-shadow transition-opacity opacity-0 bottom-[135px] right-20 p-[7.917px] rounded-[7.917px] w-fit text-xl text-primary`}>
                    <span>HOW CAN WE HELP?</span>
                </div> */}
        {openchat && (
          <div className="py-8  lg:p-8 chat-shadow bg-accent absolute w-[330px]  lg:w-[515px] lg:right-[50px] right-0 bottom-[26px] lg:bottom-[-30px] ">
            <div className="flex flex-col order-1 sm:order-2  justify-center bg-white p-6 custom-shadow-top shadow-lg ">
              <p className="pb-0 text-[20px] max-lg:text-[16px] max-lg:pb-2">
                Fill in the details below or call us at{" "}
                <Link href="tel:+91 8399959996"  className="font-semibold lg:hidden ">+91 8399959996</Link>
              </p>
              <p className="pb-2 text-[20px] max-lg:hidden">
              <Link href="tel:+91 8399959996"  className="font-semibold ">+91 8399959996</Link>
           
              </p>
              
              <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:w-full lg:w-[400px] lg:mt-4 max-lg:mt-4"
            >
              <div className="max-lg:mb-2 lg:mb-4">
                <label className="block font-semibold  lg:text-base max-lg:text-sm">NAME:</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                   defaultValue=""
                  className="border-black border-solid border w-full h-[38px]"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="max-lg:mb-2 lg:mb-4">
                <label className="block font-semibold  lg:text-base max-lg:text-sm">EMAIL:</label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                   defaultValue=""
                  className="border-black border-solid border w-full h-[38px]"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="max-lg:mb-2 lg:mb-4">
                <label className="block font-semibold lg:text-base max-lg:text-sm">PHONE:</label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                   defaultValue=""
                  className="border-black border-solid border w-full h-[38px]"
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}
              </div>
              <div className="max-lg:mb-2 lg:mb-4">
                <label className="block font-semibold  lg:text-base max-lg:text-sm">CITY:</label>
                <select
                  {...register("city", { required: "City is required" })}
                  className="border-black border-solid border w-full h-[38px]"
                >
                  <option value="">Select a city</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
                {errors.city && (
                  <span className="text-red-500">{errors.city.message}</span>
                )}
              </div>
              <div className="max-lg:mb-2 lg:mb-4 mt-1 max-lg:mt-3">
                <p className="text-sm">
                  By clicking the button below, you agree to our Website&nbsp;
                  <span className="underline">Terms of Service</span>
                  &nbsp;and acknowledge our&nbsp;
                  <span className="underline">Privacy Policy</span>.
                </p>
              </div>
              <div className="max-lg:mb-2 lg:mb-4 lg:flex lg:justify-center max-lg:py-3">
                <input type="checkbox" {...register("newsUpdates")} />
                <label className="ml-2 text-sm">{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
              </div>
              <div className="w-full pt-2 group ">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`border-black border w-full justify-center   group-hover:border-none  max-lg:px-0 px-4 gap-2 flex items-center h-[36px] transition-all  ease-in-out group-hover:bg-primary group-hover:text-white cursor-pointer ${
                    isLoading ? "bg-gray-300 cursor-not-allowed" : ""
                  }`}
             
                >
                  <span className="text-base bg-transparent max-lg:px-0  flex py-1 text-black group-hover:text-white ">
                   Submit </span>
                   <div className="bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')] bg-contain w-[14px] h-[14px] bg-no-repeat ">

                   </div>
                   
                 
                </button>
              </div>
            </form>
            </div>
          </div>
        )}
        {openchat && (
          <div
            className="fixed w-full h-full left-0 top-0 bg-transparent -z-10"
            onClick={() => setOpenChat(false)}
          ></div>
        )}
      </div>
    </div>
  );
}