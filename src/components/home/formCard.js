"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CommonBtnKnowMore from "./commonBtnKnowMore";
import ExploreBtn from "./exploreBtn";
import { Checkbox } from "@mui/material";
import BasicSelectDrop from "../select";

export default function FormCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [ischeck, setIsCheck] = useState(false);
  const city = ["Mumbai", "Pune", "Kolkata","Hyderabad","NCR"];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },setValue,
    control,
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
  };

  const InputField = (field, label, type, error, name) => {
    return (
      <div className="relative z-0 w-full mb-3">
        <label className="block font-semibold mb-1" htmlFor={name}>
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
    <div className="bg-white ">
      <div className=" px-6 max-w-[1920px] py-20 max-lg:py-16  mx-auto 2xl:px-[160px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row  md:gap-14 lg:gap-16  xl:gap-24 2xl:gap-32 ">
          <div className="  lg:w-[640px] 2xl:w-[680px] lg:h-[650px] xl:h-[750px]  max-lg:w-full   order-1 sm:order-1">
            <Image
              src="/images/home/form.png"
              height={800}
              width={604}
              alt="formImage"
              className="h-full w-full object-center"
            />
          </div>
          <div className=" flex flex-col   order-1 sm:order-2 max-lg:pt-[48px] justify-center ">
            <h2 className="text-2xl font-normal  lg:text-4xl lg:pb-2">
              Always find your space
            </h2>
            <h2 className="text-3xl font-normal lg:text-5xl font-kepler">
              in the city of your choice.
            </h2>
            <p className="py-4 max-lg:py-6 ">
              Fill in the details below or call us at +91 98765 43210
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
                  <div className="mb-3">
                    <label
                      className="block font-semibold mb-1"
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

              <div>
                <p className="text-sm">
                  By clicking the button below, you agree to our Website&nbsp;
                  <span>Terms of Service</span>
                  &nbsp;and acknowledge our&nbsp;
                  <span>Privacy Policy</span>.
                </p>
              </div>
              <div className="flex gap-2  my-4 w-full">
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

              <div className="w-full  pt-2">
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
      </div>
    </div>
  );
}
