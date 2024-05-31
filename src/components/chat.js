'use client'
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ExploreBtn from "./home/exploreBtn";

export default function Chat() {
    const [openchat, setOpenChat] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();    

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission logic here
    };

    return (
        <div>
            <div className="fixed bottom-10 right-7 lg:bottom-5 lg:right-16 z-30">
                <a className="cursor-pointer chat-shadow hover-card" onClick={() => setOpenChat(!openchat)}>
                    <Image src="/images/chat.svg" alt="chat" className="w-[55px] lg:w-[70px] h-auto" width={150} height={150} />
                </a>
                {/* <div className={`bg-accent fixed hidden ${openchat ? "hidden lg:hidden" : "block"} card lg:block chat-shadow transition-opacity opacity-0 bottom-[135px] right-20 p-[7.917px] rounded-[7.917px] w-fit text-xl text-primary`}>
                    <span>HOW CAN WE HELP?</span>
                </div> */}
                {openchat && (
                    <div className="py-8  lg:p-8 chat-shadow bg-accent absolute w-[328px] lg:w-[600px] right-0 bottom-[26px] lg:bottom-[34px]">
                        <div className='flex flex-col order-1 sm:order-2  justify-center bg-white p-6'>
                            <p className='pb-2'>Fill in the details below or call us at <span className="font-semibold ">+91 98765 43210</span></p>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-full">
                                <div className='mb-2'>
                                    <label className='block font-semibold'>Name:</label>
                                    <input type="text" {...register("name", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className='mb-2'>
                                    <label className='block font-semibold'>Email:</label>
                                    <input type="text" {...register("email", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className='mb-2'>
                                    <label className='block font-semibold'>Phone:</label>
                                    <input type="text" {...register("phone", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                    {errors.phone && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='block font-semibold'>City:</label>
                                    <select {...register("city", { required: true })} className="border-black border-solid border w-full h-[38px]">
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Kolkata">Kolkata</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                    </select>
                                    {errors.city && <span className="text-red-500">This field is required</span>}
                                </div>
                             
                                <div className='mb-3 lg:flex  max-lg:py-3'>
                                    <input type="checkbox" {...register("newsUpdates")} />
                                    <label className='ml-2 text-sm'>{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
                                </div>
                                <div className='w-full '>
                                    <ExploreBtn btnName={"submit"} />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {openchat && <div className="fixed w-full h-full left-0 top-0 bg-transparent -z-10" onClick={() => setOpenChat(false)}></div>}
            </div>
        </div>
    )
}
