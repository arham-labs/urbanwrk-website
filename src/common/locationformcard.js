"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import BasicSelectDrop from "../components/select";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { LoadingButton } from '@mui/lab';

export default function LocationFormCard() {
    const { register, handleSubmit, watch, formState: { errors }, reset, setValue, control } = useForm({ mode: "onChange" });
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const city = ["Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Pune"];
    const [storeCity, setStoreCity] = useState("");
    const router = useRouter();
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
        setIsButtonDisabled(true);

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
            Lead_Source: "Website",
            Lead_Status: "Not Contacted",
            Cities: data.city,
            Phone: data.phone,
            Mobile: data.phone,
        };

        fetchZohoData(ZohoFormData)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            reset();
            setStoreCity("");
            setPhone("")
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
        router.push("/thank-you");
        setStoreCity("")
        setPhone("")

    }


    const formValues = watch();
    useEffect(() => {
        const hasErrors = Object.keys(errors).length > 0;

        delete formValues.newsUpdates;
        const isFormFilled = Object.values(formValues).every((value) => value);

        setIsButtonDisabled(hasErrors || !isFormFilled);
    }, [formValues, errors]);

    return (
        <>
            <h2 className="text-2xl font-normal text-center lg:text-3xl 2xl:text-4xl lg:pb-2">
                Want to find your space?
            </h2>
            <p className="text-sm lg:text-base pt-4 max-lg:pt-6 text-center">
                Get in touch with us to know more. Call us Mon-Fri - 08:30-18:00 at <Link href="tel:+91 8399959996" className="font-semibold text-center">
                    +91 8399959996
                </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-full lg:mt-4">
                <div className="mb-4">
                    <label className="block font-semibold" htmlFor="name">NAME:</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="border-black bg-bglight1 border-solid border w-full h-[38px] px-2"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
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
                                message: "Enter a valid email",
                            },
                        })}
                        className="border-black bg-bglight1 border-solid border w-full h-[38px] px-2"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
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
                    <Controller
                        control={control}
                        name="city"
                        render={({ field }) => (
                            <>
                                <BasicSelectDrop
                                    list={city}
                                    {...field}
                                    value={storeCity}
                                    labelName="Select City"
                                    handleSelectChange={(val) => {
                                        field.onChange(val);
                                        setStoreCity(val);
                                    }}
                                />
                                {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                            </>
                        )}
                    />
                </div>
                <div className="mb-4 max-lg:mt-6">
                    <p className="text-sm">
                        By clicking the button below, you agree to our Website&nbsp;
                        <a href="/terms-of-use"><span className="underline">Terms of Service</span></a>
                        &nbsp;and acknowledge our&nbsp;
                        <a href="/privacy-policy"><span className="underline">Privacy Policy</span></a>
                    </p>
                </div>
                <div className="mb-4 lg:flex max-lg:py-3">
                    <input type="checkbox" id="news" {...register("newsUpdates")} />
                    <label htmlFor="news" className="ml-2 text-sm">
                        {`I'd like to receive the latest news and updates from UrbanWrk.`}
                    </label>
                </div>
                <div className={`w-full pt-2 group ${isLoading && `cursor-not-allowed pointer-events-none`}`}>
                    <LoadingButton
                        type="submit"
                        disabled={isButtonDisabled || isLoading}
                        loading={isLoading}
                        className={`px-4 gap-2 flex items-center h-[36px] !font-inherit w-[112px] !rounded-none !transition-all !ease-in-out 
                                ${isButtonDisabled
                                ? "bg-transparent !text-[#999999] border-[#999999] cursor-not-allowed"
                                : "!border border-black text-black  group-hover:border-primary group-hover:bg-primary group-hover:text-white cursor-pointer"
                            }`}
                    >
                        {!isLoading ? "Submit" : ""}
                        {!isLoading && <div
                            className={`bg-contain w-[14px] h-[14px] bg-no-repeat 
                                  ${!isButtonDisabled
                                    ? "bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')]"
                                    : "bg-[url('/images/home/disableArrow.svg')]"
                                }`}
                        ></div>}
                    </LoadingButton>

                </div>
            </form>
        </>
    );
}
