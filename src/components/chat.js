'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import Axios from "axios"
import { Checkbox } from "@mui/material";
import Link from "next/link";
import ExploreBtn from "./home/exploreBtn";


export default function Chat() {
    const [openchat, setOpenChat] = useState(false);
    const [showpopup, setShowPopup] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();    const [ischeck, setIsCheck] = useState(false);


    const onSubmit = (data) => {
        console.log(data); // You can handle form submission logic here
    };


    return (
        <div>
            <div className="fixed bottom-10 right-7 lg:bottom-16 lg:right-16 z-30">
                <a className="cursor-pointer chat-shadow hover-card" onClick={() => setOpenChat(!openchat)}>
                    <Image src="/images/chat.svg" alt="chat" className="w-[55px] lg:w-[70px] h-auto" width={150} height={150} />

                </a>
                <div className={`bg-accent fixed hidden ${openchat ? "hidden lg:hidden" : "block"} card lg:block chat-shadow transition-opacity opacity-0 bottom-[165px] right-20 p-[7.917px] rounded-[7.917px] w-fit text-xl text-primary`}>
                    <span>HOW CAN WE HELP?</span>
                </div>
                {openchat && <div className="py-8 px-6 lg:p-8 chat-shadow bg-accent absolute w-[328px] lg:w-[400px] right-0 bottom-[90px] lg:bottom-[105px]">
                    
                    <div className=' flex flex-col   order-1 sm:order-2 max-lg:pt-[48px] justify-center  bg-white p-6'>
              
                        <p className='py-4 max-lg:py-6'>Fill in the details below or call us at +91 98765 43210</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-full  ">
                            <div className='mb-4'>
                                <label className='block font-semibold'>Name:</label>
                                <input type="text" {...register("name", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label className='block font-semibold'>Email:</label>
                                <input type="text" {...register("email", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label className='block font-semibold'>Phone:</label>
                                <input type="text" {...register("phone", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                {errors.phone && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label className='block font-semibold'>City:</label>
                                <select {...register("city", { required: true })} className="border-black border-solid border w-full h-[38px]">
                                    <option value="New York">Mumbai</option>
                                    <option value="Los Angeles">Pune</option>
                                    <option value="Los Angeles">Kolkata</option>
                                    <option value="Los Angeles">Hyderabad</option>
                                </select>
                                {errors.city && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4 max-lg:mt-6'>
                                <p className='text-sm'>
                                    By clicking the button below, you agree to our Website&nbsp;
                                    <span className="underline">Terms of Service</span>
                                    &nbsp;and acknowledge our&nbsp;
                                    <span className="underline">Privacy Policy</span>.
                                </p>

                            </div>
                            <div className='mb-4 lg:flex lg:justify-center max-lg:py-3'>
                                <input type="checkbox" {...register("newsUpdates")} />
                                <label className='ml-2 text-sm '>{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
                            </div>

                            <div className='w-full pt-2'>
                                <ExploreBtn btnName={"submit"} />
                            </div>
                        </form>
                    </div>
                   
                </div>}
                {openchat && <div className="fixed w-full h-full left-0 top-0 bg-transparent -z-10" onClick={() => setOpenChat(false)}></div>}
            </div>

        </div>
    )
}