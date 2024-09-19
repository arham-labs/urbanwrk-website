"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import BasicSelectDrop from "../../components/select";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

export default function Restaurants({ data }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control
    } = useForm({ mode: 'onChange' });
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const city = ["Hyderabad", "Kolkata", "Mumbai", "NCR", "Pune"];
    const [storeCity, setStoreCity] = useState("");
    const router = useRouter()
    const searchParams = useSearchParams();
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_term = searchParams.get('utm_term');
    const utm_content = searchParams.get('utm_content');

    const onSubmit = async (data) => {
        setIsLoading(true);
        setIsButtonDisabled(true)

        const formData = new FormData();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key]);
            }
        }

        // Add location with UTM parameters to formData
        const locationWithUTM = `${window?.location?.href}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`;

        formData.append('location', locationWithUTM);

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
            router.push("/thank-you")
            reset();
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
        router.push("/thank-you")
        reset();
        setStoreCity("")

    }

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
        <div className='bg-[#FFF] flex '>

            <div className='w-full mx-auto  flex max-lg:items-center max-lg:justify-center  justify-between max-lg:flex-col max-lg:gap-7'>
                <div className='w-[487px] max-lg:w-full'>

                    <h1 className='text-6xl max-md:text-3xl uppercase'>{data?.locationName}</h1>
                    <div className='text-base  my-4 '>
                        <p className='text-[#7D7C7C] text-xs font-semibold'>CONNECTIVITY</p>
                        <p className='pt-4'>{data.location1}</p>
                        <p>{data.location2}</p>
                    </div>
                    <div className='flex flex-wrap max-md:w-[300px] md:w-full gap-4'>
                        {data?.connectivityAmenities?.map((item, i) => <div className='flex mt-7  items-center justify-center ' key={i}>
                            <Image src={item.img} height={40} width={35} alt='exploreSvg' className='mr-2' />
                            <p className='text-xs  px-1 w-[95px]'>{item.title}</p>
                        </div>)}
                    </div>
                </div>
                <div className="flex flex-col order-1 sm:order-2 bg-bglight1 p-6 md:p-10 lg:w-1/2 justify-center">
                    <h2 className="text-2xl font-normal text-center lg:text-4xl lg:pb-2">
                        Want to find your space?
                    </h2>
                    <p className="pt-4 max-lg:pt-6 text-center">
                        Get in touch with us to know more. Call us Mon-Fri - 08:30-18:00
                    </p>
                    <Link href="tel:+91 8399959996" className="font-semibold text-center">
                        +91 8399959996
                    </Link>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col md:w-full lg:mt-4"
                    >
                        <div className="mb-4">
                            <label className="block font-semibold" htmlFor="name">NAME:</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required" })}
                                className="border-black bg-bglight1 border-solid border w-full h-[38px] px-2"
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
                                        message: "Enter a valid email",
                                    },
                                })}
                                className="border-black bg-bglight1 border-solid border w-full h-[38px] px-2"
                            />
                            {errors.email && (
                                <span className="text-red-500">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold" htmlFor="phone-number">PHONE:</label>
                            <input
                                type="text"
                                id="phone-number"
                                maxLength={10}
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "Enter a valid phone number",
                                    },
                                })}
                                className="border-black bg-bglight1 border-solid border w-full h-[38px] px-2"
                            />
                            {errors.phone && (
                                <span className="text-red-500">{errors.phone.message}</span>
                            )}
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
                                By clicking the button below, you agree to our Website&nbsp;
                                <Link href="/terms-of-use"><span className="underline">Terms of Service</span></Link>
                                &nbsp;and acknowledge our&nbsp;
                                <Link href="/privacy-policy"><span className="underline">Privacy Policy</span></Link>
                            </p>
                        </div>
                        <div className="mb-4 lg:flex max-lg:py-3">
                            <input type="checkbox" id="news" {...register("newsUpdates")} />
                            <label htmlFor="news" className="ml-2 text-sm">{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
                        </div>
                        <div className={`w-full pt-2 group ${isLoading && `cursor-not-allowed pointer-events-none`}`}>
                            <button
                                type="submit"
                                disabled={isButtonDisabled || isLoading}
                                className={`border-black border  px-4 gap-2 flex items-center h-[36px] w-fit transition-all  ease-in-out  ${isButtonDisabled
                                    ? "bg-transparent !text-[#999999] !border-[#999999] cursor-not-allowed"
                                    : " group-hover:border-primary group-hover:bg-primary group-hover:text-white cursor-pointer"
                                    }`}>Submit
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
        </div>
    )
}
