"use client"
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import CommonBtnKnowMore from './commonBtnKnowMore';
import ExploreBtn from './exploreBtn';
import Link from 'next/link';

export default function FormCard() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission logic here
    };

    return (
        <div className="bg-white ">
            <div className=" px-6 max-w-[1920px] py-20 max-lg:py-16  mx-auto 2xl:px-[160px] lg:px-[100px]">
                <div className='flex flex-col lg:flex-row  md:gap-14 lg:gap-16  xl:gap-24 2xl:gap-32 '>
                    <div className='  lg:w-[640px] 2xl:w-[680px] lg:h-[650px] xl:h-[750px]  max-lg:w-full   order-1 sm:order-1'>
                        <Image src="/images/home/form.png" height={800} width={604} alt="formImage" className='h-full w-full object-center' />
                    </div>
                    <div className=' flex flex-col   order-1 sm:order-2 max-lg:pt-[48px] justify-center '>
                        <h2 className='text-2xl font-normal  lg:text-4xl lg:pb-2'>Always find your space</h2>
                        <h2 className='text-3xl font-normal lg:text-5xl font-kepler'>in the city of your choice.</h2>
                        <p className='py-4 max-lg:py-6'>Fill in the details below or call us at <Link href="tel:+91 8399959996">+91 8399959996</Link></p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-full lg:w-[400px] xl:w-[462px] lg:mt-4">
                            <div className='mb-4'>
                                <label className='block font-semibold'>NAME:</label>
                                <input type="text" {...register("name", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label className='block font-semibold'>EMAIL:</label>
                                <input type="text" {...register("email", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label className='block font-semibold'>PHONE:</label>
                                <input type="text" {...register("phone", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                                {errors.phone && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label className='block font-semibold'>CITY:</label>
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
                                <ExploreBtn btnName={"Submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
