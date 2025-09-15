"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import BasicSelectDrop from "../../components/select";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useRouter, useSearchParams } from "next/navigation";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";


export default function FormCard() {
  const { register, handleSubmit, watch, formState: { errors }, reset, setValue, control } = useForm({ mode: "onChange" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const city = ["Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Pune"];
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
  const router = useRouter();

  useEffect(() => {
    setValue('phone', '')
  }, [])

  // Function to validate phone number
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

    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
          return decodeURIComponent(cookie[1]);
        }
      }
      return null;
    };

    const event_utm_source = getCookie("event_utm_source") || "";
    const event_utm_medium = getCookie("event_utm_medium") || "";
    const event_utm_campaign = getCookie("event_utm_campaign") || "";
    const event_utm_id = getCookie("event_utm_id") || "";
    const event_utm_term = getCookie("event_utm_term") || "";
    const first_visit = getCookie("first_visit") || window.location.href;

    // formData.append("location", window.location.host + window.location.pathname);
    formData.append("utm_source", event_utm_source)
    formData.append("utm_medium", event_utm_medium)
    formData.append("utm_campaign", event_utm_campaign)
    formData.append("utm_adgroupname", utm_adgroupname)
    formData.append("utm_term", event_utm_term)
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
      Mobile: data.phone,
      utm_source: event_utm_source,
      utm_medium: event_utm_medium,
      utm_campaign: event_utm_campaign,
      utm_id: event_utm_id,
      utm_term: event_utm_term,
      Initial_Visit_URL: first_visit,
      Final_Visit_URL: window.location.href
    }

    fetchZohoData(ZohoFormData)

    gtag("event", "urbanwrk_form_submit", {
      event_category: "Form",
      event_label: "submit",
      value: data.phone,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      //setShowPopup(true);
      reset();
      setPhone("")
      setStoreCity("")
      setIsButtonDisabled(false);
      router.push("/thank-you");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
  }

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

  return (
    <div className="bg-white">
      <div className="px-6 max-w-[1920px] py-20 max-lg:py-16 mx-auto 2xl:px-[160px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row md:gap-14 lg:gap-16 xl:gap-24 2xl:gap-32">
          <div className="lg:w-[640px] 2xl:w-[680px] lg:h-[650px] xl:h-[750px] max-lg:w-full order-1 sm:order-1">
            <Image
              src="/images/home/form1.png"
              height={800}
              width={604}
              alt="UrbanWrk office"
              className="h-full w-full object-center"
              unoptimized
            />
          </div>
          <div className="flex flex-col order-1 sm:order-2 max-lg:pt-[48px] justify-center">
            <h2 className="text-2xl font-normal lg:text-4xl lg:pb-2">
              Find your space
            </h2>
            <h2 className="text-3xl font-normal lg:text-5xl font-kepler">
              in the city of your choice.
            </h2>
            <p className="py-4 max-lg:py-6">
              Fill in the details below or call us at{" "}
              <Link href="tel:+91 8399959996" className="font-semibold">
                +91 8399959996
              </Link>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:w-full lg:w-[400px] xl:w-[462px] lg:mt-4"
            >
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="name">NAME:</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="border-black border-solid border w-full h-[38px] px-2"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="email">EMAIL:</label>
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
                  className="border-black border-solid border w-full h-[38px] px-2"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="phone-number">PHONE:</label>
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
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="city">CITY:</label>
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
              <div className="mb-4 max-lg:mt-6">
                <p className="text-sm">
                  By submitting, you agree to our website’s.&nbsp;
                  <a href="/terms-of-use"><span className="underline">Terms of Service</span></a>
                  &nbsp;and&nbsp;
                  <a href="/privacy-policy"><span className="underline">Privacy Policy</span></a>
                </p>
              </div>
              <div className="mb-4 lg:flex lg:justify-center max-lg:py-3">
                <input type="checkbox" id="news" {...register("newsUpdates")} />
                <label htmlFor="news" className="ml-2 text-sm">{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
              </div>
              <div className={`w-full pt-2 group ${isLoading && `cursor-not-allowed pointer-events-none`}`}>
                <LoadingButton
                  type="submit"
                  loading={isLoading}
                  disabled={isButtonDisabled || isLoading}
                  className={`border-black border  px-4 gap-2 flex items-center h-[36px] w-[112px] transition-all  ease-in-out  ${isButtonDisabled
                    ? "bg-transparent !text-[#999999] !border-[#999999] cursor-not-allowed"
                    : " group-hover:border-primary group-hover:bg-primary group-hover:text-white cursor-pointer"
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
      <style jsx global>{`
            .react-international-phone-input-container .react-international-phone-input{
                background: white !important;
            }
            .react-international-phone-country-selector-button {
              background: white !important;
            }

            `}</style>
    </div>
  );
}
