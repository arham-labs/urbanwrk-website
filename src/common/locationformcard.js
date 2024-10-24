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

export default function LocationFormCard() {
    const { register, handleSubmit, watch, formState: { errors }, reset, control } = useForm({ mode: "onChange" });
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const city = ["Hyderabad", "Kolkata", "Mumbai", "NCR", "Pune"];
    const [storeCity, setStoreCity] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const utm_source = searchParams.get("utm_source");
    const utm_medium = searchParams.get("utm_medium");
    const utm_campaign = searchParams.get("utm_campaign");
    const utm_term = searchParams.get("utm_term");
    const utm_content = searchParams.get("utm_content");
    const [phone, setPhone] = useState("");
    const [phoneTouched, setPhoneTouched] = useState(false); // Track if phone input has been touched
    const phoneUtil = PhoneNumberUtil.getInstance();

    // Function to validate phone number
    const isPhoneValid = (phone) => {
        try {
            const number = phoneUtil.parseAndKeepRawInput(phone, "IN"); // Assume default country code is India (IN)
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

        let locationWithUTM = "";

        // Ensure the window object is available before accessing it
        if (typeof window !== "undefined") {
            locationWithUTM = `${window.location.host}${window.location.pathname}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`;
        }

        formData.append("location", locationWithUTM);

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
        router.push("/thank-you");
        reset();
        setStoreCity("")

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
                        defaultValue={phone} // Set default value to ensure it's not undefined
                        rules={{
                            required: "Phone number is required",
                            validate: (value) => (phoneTouched && !isPhoneValid(value)) ? "Enter a valid phone number" : undefined,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <PhoneInput
                                    defaultCountry="in"
                                    value={value || phone} // Use value from form or fallback to state
                                    onFocus={() => setPhoneTouched(true)} // Set phoneTouched on focus
                                    onChange={(phoneValue) => {
                                        setPhone(phoneValue); // Update state
                                        onChange(phoneValue); // Update Controller field value
                                    }}
                                    forceDialCode
                                />
                                {phoneTouched && errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
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
                    <button
                        type="submit"
                        disabled={isButtonDisabled || isLoading}
                        className={`border-black border px-4 gap-2 flex items-center h-[36px] w-fit transition-all ease-in-out  ${isButtonDisabled
                            ? "bg-transparent !text-[#999999] !border-[#999999] cursor-not-allowed"
                            : "group-hover:border-primary group-hover:bg-primary group-hover:text-white cursor-pointer"
                            }`}>
                        Submit
                        <div
                            className={`${!isButtonDisabled
                                ? "bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')]"
                                : "bg-[url('/images/home/disableArrow.svg')]"
                                } bg-contain w-[14px] h-[14px] bg-no-repeat`}
                        ></div>
                    </button>
                </div>
            </form>
        </>
    );
}
