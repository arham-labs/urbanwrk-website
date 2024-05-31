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
  const [isHovered, setIsHovered] = useState(false);
  const [ischeck, setIsCheck] = useState(false);
  const city = ["Mumbai", "Pune", "Kolkata","Hyderabad","NCR"];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,setValue,
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
  };

  const InputField = (field, label, type, error, name) => {
    return (
      <div className="relative z-0 w-full mb-2">
        <label className="block font-semibold mb-1 max-md:text-[12px] text-[14px]" htmlFor={name}>
          {label} :
        </label>
        <input
          type={type}
          id={name}
          {...field}
          placeholder=""
          className="border-black border-solid border w-full h-[38px]"
        />

        {error && (
          <span className="text-red-700 text-sm mt-2 block">
            {error.message}
          </span>
        )}
      </div>
    );
  };

  const handleSelectChange = (data) => {
    setValue("city",data);
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
          <div className="py-8  lg:p-8 chat-shadow bg-accent absolute w-[330px]  lg:w-[640px] lg:right-[50px] right-0 bottom-[26px] lg:bottom-[-30px] ">
            <div className="flex flex-col order-1 sm:order-2  justify-center bg-white p-6 custom-shadow-top shadow-lg ">
              <p className="pb-2 text-[20px]">
                Fill in the details below or call us at{" "}
                <span className="font-semibold ">+91 98765 43210</span>
              </p>
              <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:w-full"
            >
              <Controller
                name="name"
                control={control}
                rules={{ required: "This field is mandatory" }}
                render={({ field }) =>
                  InputField(field, "NAME", "text", errors.name, "name")
                }
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: "This field is mandatory" }}
                render={({ field }) =>
                  InputField(field, "EMAIL", "text", errors.email, "email")
                }
              />
              <Controller
                name="phone"
                control={control}
                rules={{ required: "This field is mandatory" }}
                render={({ field }) =>
                  InputField(field, "PHONE", "text", errors.phone, "phone")
                }
              />

              <Controller
                name="city"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="mb-1">
                    <label
                      className="block font-semibold mb-1 max-md:text-[12px] text-[14px]"
                      htmlFor={"city"}
                    >
                      CITY :
                    </label>
                    <BasicSelectDrop
                      list={city}
                      labelName="Select City"
                      handleSelectChange={handleSelectChange}
                      {...field}
                    />
                    {errors.city && (
                      <span className="text-red-700 text-sm  block">
                        This field is required
                      </span>
                    )}
                  </div>
                )}
              />

             
              <div className="flex gap-2  my-1 w-full">
                <Checkbox
                  sx={{ color: "black", "&.Mui-checked": { color: "black" } }}
                  checked={ischeck}
                  onChange={(e) => setIsCheck(e.target.checked)}
                  className="!p-0 !border-black"
                />

                <div className="text-sm lg:text-base font-medium ">
                  {`I'd like to receive the latest news and updates from
                    UrbanWrk.`}
                </div>
              </div>

              <div className="w-full  pt-6">
                <div
                  className={`border-black border flex h-[36px] w-fit transition-all delay-75 ease-in-out hover:bg-primary hover:text-white cursor-pointer`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <button type="submit" className="h-full w-full">
                    <span className="text-base bg-transparent px-4 max-md:px-4 flex py-1 text-black hover:text-white">
                      Submit
                      <Image
                        src={
                          isHovered
                            ? "/images/home/lightArrow.svg"
                            : "/images/home/btnArrow.svg"
                        }
                        height={12}
                        width={12}
                        alt="exploreSvg"
                        className="ml-2"
                      />
                    </span>
                  </button>
                </div>
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
