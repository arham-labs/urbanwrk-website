"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import BasicSelectDrop from '../../../components/select';
import { toast } from "react-toastify";

export default function HomeBuild({ data }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const city = ["Hyderabad", "Kolkata", "Mumbai", "NCR", "Pune",];
  const [storeCity, setStoreCity] = useState("");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsButtonDisabled(true)
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
        toast.error("Something went wrong");
        throw new Error(`Invalid response: ${response.status}`);
      }
      console.log("submit", response);
      setShowPopup(true);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsButtonDisabled(true)
    }
  };

  const onClose = () => {
    setShowPopup(false);
    reset();
  };
  const formValues = watch();

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;

    delete formValues.newsUpdates;
    const isFormFilled = Object.values(formValues).every((value) =>
      value
    );

    setIsButtonDisabled(hasErrors || !isFormFilled);
  }, [formValues, errors]);


  const brandData = [
    "Private, fully-customisable and branded office space ready within 45-60 days",
    "Designed by experts and WELL and LEED certified",
    "Flexible lease terms with utility costs included",
    "Complete administrative management including visitor management and payroll",
    "Access to co-working spaces, lounges, WellnessWrk Gym and BuzzWrk Café",
    "Exclusive access to all our events, seminars and industry talks",
  ];
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
      <div className="w-full lg:w-1/2 bg-bglight1 p-5 lg:p-12">
        <div className="flex flex-col justify-center">
          <span className="mb-5 text-xl font-medium">Get in touch</span>
          <p className="mb-5">
            Tell us what you need and our team will work out the best space for
            it.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full lg:mt-4"
          >
            <div className="mb-4">
              <label className="block font-semibold">NAME:</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="border-black border-solid border bg-bglight1 w-full h-[38px] px-3"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold">EMAIL:</label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="border-black border-solid border bg-bglight1 w-full h-[38px] px-3"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold">PHONE:</label>
              <input
                type="number"
                maxLength={10}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="border-black border-solid border bg-bglight1 w-full h-[38px] px-3"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold">CITY:</label>
              <Controller control={control} name="city"
                render={({ field }) => (
                  <>
                    <BasicSelectDrop list={city} {...field} value={storeCity} labelName="City" handleSelectChange={(val) => {
                      field.onChange(val)
                      setStoreCity(val)
                    }} />
                    {errors.city && (
                      <span className="text-red-500">{errors.city.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="mb-4 max-lg:mt-6">
              <p className="text-sm">
                By clicking the button below, you agree to our Website&nbsp;
                <Link href="/terms-of-use"><span className="underline">Terms of Service</span></Link>
                &nbsp;and acknowledge our&nbsp;
                <Link href="/privacy-policy"><span className="underline">Privacy Policy</span></Link>
              </p>
            </div>
            <div className="mb-4 lg:flex max-lg:py-3">
              <input type="checkbox" {...register("newsUpdates")} />
              <label className="ml-2 text-sm">{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
            </div>
            <div className={`w-full pt-2 group ${isLoading && `cursor-not-allowed pointer-events-none`}`}>
              <button
                type="submit"
                disabled={isButtonDisabled || isLoading}
                className={`border-black border  px-4 gap-2 flex items-center h-[36px] w-fit transition-all  ease-in-out  ${isButtonDisabled
                  ? "bg-transparent !text-[#999999] !border-[#999999] cursor-not-allowed"
                  : " group-hover:border-primary group-hover:bg-primary group-hover:text-white cursor-pointer"
                  }`}
              >
                <span
                  className={`text-base bg-transparent  max-md:px-4 flex py-1 text-black  ${isButtonDisabled
                    ? "bg-transparent !text-[#999999] border-[#999999] cursor-not-allowed"
                    : "group-hover:text-white"
                    } `}
                >
                  Submit{" "}
                </span>
                <div
                  className={`${!isButtonDisabled
                    ? "bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')]"
                    : "bg-[url('/images/home/disableArrow.svg')]"
                    }   bg-contain w-[14px] h-[14px] bg-no-repeat `}
                ></div>
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div
          className="fixed w-full h-full left-0 top-0 z-50 bg-[#0000005e]"
          onClick={onClose}
        >
          <div className="fixed z-50 transition-all ease-in-out duration-500 bg-[#FFFFFF] w-[320px] h-[192px] md:w-[572px] md:h-auto left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-6 md:p-[60px]">
            <div className="flex flex-col justify-center items-center text-dark relative">
              <a
                className="absolute -top-3 -right-2 md:-right-8 md:-top-8 cursor-pointer"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <Image
                src="/images/thank-you.svg"
                alt="thank-you"
                width={150}
                height={150}
                className="w-9 md:w-16 mb-2 md:mb-8"
              />
              <span className="text-2xl md:text-3xl block mb-1 text-dark uppercase md:mb-3">
                Thank You
              </span>
              <p className="text-sm md:text-xl md:w-[400px] text-center text-dark">
                Your details have been submitted successfully.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
