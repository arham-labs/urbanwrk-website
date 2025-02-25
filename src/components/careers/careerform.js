"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import BasicSelectDrop from "../../components/select";
import { toast } from "react-toastify";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { LoadingButton } from "@mui/lab";



export default function CareerFormCard() {
    const { register, handleSubmit, watch, formState: { errors }, reset, control, setValue } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const departmentOptions = ["Client Experience", "Design", "Finance", "Growth", "HR", "IT", "Marketing", "Projects"];
    const [storeInterest, setStoreInterest] = useState("");
    const [fileName, setFileName] = useState('');
    const city = ["Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Pune"];
    const [storeCity, setStoreCity] = useState("");
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
        setIsButtonDisabled(true)
        const formData = new FormData();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (key === "resume") {
                    // Append the file directly
                    for (const file of data.resume) {
                        formData.append('resume', file);
                    }
                } else {
                    formData.append(key, data[key]);
                }
            }
        }
        let ZohoFormData = {
            Last_Name: data.name,
            Email: data.email,
            name: data.name,
            field_domain_of_interest: data.field_domain_of_interest,
            Cities: data.city,
            Phone: data.phone,
            "Lead_Source": "Website",
            "Lead_Status": "Not Contacted",
        }


        fetchZohoData(ZohoFormData)

        try {

            const response = await fetch("/api/career", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            setShowPopup(true);
            reset();
            setStoreInterest("")
            setPhone("")
            setStoreCity("")
            setFileName("")
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
        setStoreInterest("")
        setFileName("")
        setPhone("")
        setStoreCity("")

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
                            src="/images/careers/card-mob.jpg"
                            height={800}
                            width={604}
                            alt="formImage"
                            className="h-full w-full object-cover lg:hidden"
                            unoptimized
                        />
                        <Image
                            src="/images/careers/card-desk.jpg"
                            height={800}
                            width={604}
                            alt="formImage"
                            className="h-full w-full object-cover hidden lg:block"
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-col order-1 sm:order-2 max-lg:pt-[48px] justify-center">
                        <h2 className="text-2xl font-normal lg:text-4xl lg:pb-2">
                            Join Our
                        </h2>
                        <h2 className="text-3xl font-normal lg:text-5xl font-kepler">
                            talent network.
                        </h2>
                        <p className="py-4 max-lg:py-6">
                            Let&apos;s create spaces that inspire, innovate, and ignite the best in everyone.
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col md:w-full lg:w-[400px] xl:w-[462px] lg:mt-4"
                        >
                            <div className="mb-4">
                                <label className="block font-semibold" htmlFor="firstname">FIRST NAME:</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: "First Name is required" })}
                                    className="border-black border-solid border w-full h-[38px] px-2"
                                />
                                {errors.name && (
                                    <span className="text-red-500">{errors.name.message}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold" htmlFor="lastname">LAST NAME:</label>
                                <input
                                    type="text"
                                    id="Last_Name"
                                    {...register("Last_Name", { required: "Last Name is required" })}
                                    className="border-black border-solid border w-full h-[38px] px-2"
                                />
                                {errors.Last_Name && (
                                    <span className="text-red-500">{errors.Last_Name.message}</span>
                                )}
                            </div>
                            <div className="mb-2">
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
                            <div className="mb-2">
                                <label className="block font-semibold" htmlFor="areas">DEPARTMENT:</label>
                                <Controller control={control} name="field_domain_of_interest"
                                    render={({ field }) => (
                                        <>
                                            <BasicSelectDrop list={departmentOptions} {...field} value={storeInterest} labelName="Select Department" handleSelectChange={(val) => {
                                                field.onChange(val)
                                                setStoreInterest(val)
                                            }} />
                                            {errors.field_domain_of_interest && (
                                                <span className="text-red-500">{errors.field_domain_of_interest.message}</span>
                                            )}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
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
                                <label className="block font-semibold" htmlFor="resume">RESUME:</label>
                                <Controller control={control} name="resume"
                                    render={({ field }) => (
                                        <>
                                            <input
                                                {...register("resume", {
                                                    required: "Resume is required",
                                                    validate: {
                                                        acceptedFormats: files =>
                                                            files[0]?.type === "application/pdf" || "Only PDF files are allowed",
                                                        fileSize: files =>
                                                            files[0]?.size <= 2 * 1024 * 1024 || "File size must be less than 2MB",
                                                    }
                                                })}
                                                type="file"
                                                accept=".pdf"
                                                onChange={(e) => {
                                                    field.onChange(e.target.files);
                                                    setFileName(e.target.files[0]?.name || '');
                                                }}
                                                style={{ display: 'none' }} // Hide the default file input
                                                id="resume-upload"
                                            />
                                            <label htmlFor="resume-upload" className="!font-semibold !text-black" style={uploadBoxStyle}>
                                                {fileName || "Upload"}
                                            </label>
                                            {errors.resume && (
                                                <span className="text-red-500">{errors.resume.message}</span>
                                            )}
                                        </>
                                    )}
                                />
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
                            {/* <p className="py-4 max-lg:py-6">
                                or call us at{" "}
                                <Link href="tel:+91 8399959996" className="font-semibold">
                                    +91 8399959996
                                </Link>
                            </p> */}
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

const uploadBoxStyle = {
    display: 'block',
    width: '100%',
    padding: '8px 12px',
    border: '1px solid black',
    textAlign: 'left',
    cursor: 'pointer',
    color: '#747474',
    fontWeight: "400"
};