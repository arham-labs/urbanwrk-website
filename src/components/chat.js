"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import ExploreBtn from "./home/exploreBtn";
import { Checkbox } from "@mui/material";
import BasicSelectDrop from "../components/select";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useSearchParams } from "next/navigation";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function Chat() {
  const [openchat, setOpenChat] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, reset, setValue, control } = useForm({ mode: "onChange" });
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const city = ["Hyderabad", "Kolkata", "Mumbai", "Delhi", "Gurgaon", "Pune"];
  const [storeCity, setStoreCity] = useState("");
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source");
  const utm_medium = searchParams.get("utm_medium");
  const utm_campaign = searchParams.get("utm_campaign");
  const utm_adgroupname = searchParams.get('utm_adgroupname')
  const utm_term = searchParams.get('utm_term')
  const utm_device = searchParams.get('utm_device')
  const utm_adname = searchParams.get('utm_adname')
  const utm_matchtype = searchParams.get('utm_matchtype')
  const utm_network = searchParams.get('utm_network')
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false); // Track if phone input has been touched
  const phoneUtil = PhoneNumberUtil.getInstance();

  useEffect(() => {
    if (openchat) {
      reset(); // Reset phone value in react-hook-form explicitly
    }
  }, [openchat, reset]);

  const isPhoneValid = (phone) => {
    try {
      if (!phone || phone.trim() === "") return false; // Empty check
      const number = phoneUtil.parseAndKeepRawInput(phone, "IN");
      return phoneUtil.isValidNumber(number);
    } catch (error) {
      return false;
    }
  };


  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsButtonDisabled(true)

    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    // formData.append("location", window.location.host + window.location.pathname);
    formData.append("utm_source", utm_source)
    formData.append("utm_medium", utm_medium)
    formData.append("utm_campaign", utm_campaign)
    formData.append("utm_adgroupname", utm_adgroupname)
    formData.append("utm_term", utm_term)
    formData.append("utm_device", utm_device)
    formData.append("utm_adname", utm_adname)
    formData.append("utm_matchtype", utm_matchtype)
    formData.append("utm_network", utm_network)


    let ZohoFormData = {
      Last_Name: data.name,
      Email: data.email,
      "Lead_Source": "Website",
      "Lead_Status": "Not Contacted",
      Cities: data.city,
      Phone: data.phone,
      Mobile: data.phone
    }

    fetchZohoData(ZohoFormData)

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      setShowPopup(true);
      reset();
      setOpenChat(false)
      setStoreCity("")
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsButtonDisabled(false);
    }
  };

  const fetchZohoData = async (response) => {
    let data = [{ ...response }]
    const res = await fetch("/api/zoho", {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      toast.error("Something went wrong");
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    reset();
    setStoreCity("")

  }

  const onClose = () => {
    setShowPopup(false);
    reset();
  };

  const formValues = watch();
  useEffect(() => {

    const hasErrors = Object.keys(errors).length > 0;

    const isFormFilled = Object.values(formValues).every((value) =>
      value
    );
    setIsButtonDisabled(hasErrors || !isFormFilled);
  }, [formValues, errors]);
  return (
    <div>
      <div className="fixed bottom-10 right-7 lg:bottom-10 lg:right-16 z-30">
        <div
          className="cursor-pointer hover-card"
          onClick={() => {

            setOpenChat(!openchat)
            setIsButtonDisabled((prev) => !prev)
          }}
        >
          <Image
            src="/images/chat.svg"
            alt="chat"
            className="w-[55px] lg:w-[70px] h-auto"
            width={150}
            height={150}
            loading="eager"
          />
        </div>
        <div className={`bg-primary fixed hidden ${openchat ? "hidden lg:hidden" : "block"} card lg:block chat-shadow transition-opacity opacity-0 bottom-[135px] right-20 p-[7.917px] rounded-[7.917px] w-fit text-xl text-[#ffffff]`}>
          <span>How can we help?</span>
        </div>
        {openchat && (
          <div
            className="fixed w-full h-full left-0 top-0 bg-transparent -z-10"
            onClick={() => {
              setOpenChat(false)
              // setValue('phone',"")

            }}
          ></div>
        )}
      </div>
      {openchat && (
        <div className="lg:p-8  bg-accent fixed w-[92%] lg:w-[515px] lg:right-28 right-[15px] z-30 top-20 lg:top-auto lg:bottom-2">
          <div className="flex flex-col order-1 sm:order-2  justify-center bg-white p-6 custom-shadow-top shadow-lg ">
            <p className="pb-0 text-base max-lg:text-[16px] max-lg:pb-2">
              Fill in the details below or call us at{" "}
              <Link href="tel:+91 8399959996" className="font-semibold lg:hidden ">+91 8399959996</Link>
            </p>
            <p className="pb-2 text-base max-lg:hidden">
              <Link href="tel:+91 8399959996" className="font-semibold ">+91 8399959996</Link>

            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:w-full lg:w-[400px] lg:mt-0 max-lg:mt-4"
            >
              <div className="max-lg:mb-2 lg:mb-2">
                <label className="block font-semibold  lg:text-sm max-lg:text-sm" htmlFor="name">NAME:</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  defaultValue=""
                  className="border-black border-solid border w-full h-[38px] px-2"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="max-lg:mb-2 lg:mb-2">
                <label className="block font-semibold  lg:text-sm max-lg:text-sm" htmlFor="email">EMAIL:</label>
                <input
                  type="text"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  defaultValue=""
                  className="border-black border-solid border w-full h-[38px] px-2"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="max-lg:mb-2 lg:mb-2">
                <label className="block font-semibold  lg:text-sm max-lg:text-sm" htmlFor="phone-number">PHONE:</label>
                <Controller
                  control={control}
                  name="phone"
                  defaultValue={phone}
                  rules={{
                    required: "Phone number is required",
                    validate: (value) => (phoneTouched && !isPhoneValid(value) || value === "") ? "Enter a valid phone number" : undefined,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <PhoneInput
                        defaultCountry="in"
                        value={value || phone}
                        onFocus={() => setPhoneTouched(true)}
                        onChange={(phoneValue) => {
                          setPhone(phoneValue); // Update state
                          onChange(phoneValue); // Update Controller field value
                        }}
                        forceDialCode
                      />
                      {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                    </>
                  )}
                />
              </div>
              <div className="max-lg:mb-0 lg:mb-2">
                <label className="block font-semibold  lg:text-sm max-lg:text-sm" htmlFor="city">CITY:</label>
                <Controller control={control} name="city"
                  render={({ field }) => (
                    <>
                      <BasicSelectDrop list={city} {...field} value={storeCity} labelName="Select City" handleSelectChange={(val) => {
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
              <div className="max-lg:mb-2 lg:mb-4 flex align-baseline justify-center max-lg:pb-3 ">
                <input type="checkbox" id="news"
                  {...register("newsUpdates")} className="lg:!w-6  max-lg:!w-9 max-lg:mb-5" htmlFor="news" />
                <label className="ml-2 text-sm mt-4">You agree to our Website&nbsp;
                  <a href="/terms-of-use"><span className="underline">Terms of Service</span></a>
                  &nbsp;and acknowledge our&nbsp;
                  <a href="/privacy-policy"><span className="underline">Privacy Policy</span></a>
                </label>
              </div>

              <div className="w-full pt-2 group">
                <LoadingButton
                  type="submit"
                  disabled={isButtonDisabled || isLoading}
                  loading={isLoading}
                  className={`border-black border w-full justify-center    max-lg:px-0 px-4 gap-2 flex items-center h-[36px] transition-all  ease-in-out  ${isButtonDisabled
                    ? "bg-transparent !text-[#999999] !border-[#999999] cursor-not-allowed"
                    : " group-hover:border-none group-hover:bg-primary group-hover:text-white cursor-pointer"
                    }`}>
                  {!isLoading ? "Submit" : ""}
                  {!isLoading && <div
                    className={`${!isButtonDisabled
                      ? "bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')]"
                      : "bg-[url('/images/home/disableArrow.svg')]"
                      }   bg-contain w-[14px] h-[14px] bg-no-repeat `}
                  ></div>}
                </LoadingButton>
              </div>
            </form>
          </div>
        </div>
      )}
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
              <span className="text-2xl md:text-3xl block mb-1 text-dark  uppercase md:mb-3">
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