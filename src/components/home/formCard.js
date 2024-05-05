"use client"
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import CommonBtnKnowMore from './commonBtnKnowMore';
import ExploreBtn from './exploreBtn';

export default function FormCard() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission logic here
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row  md:gap-14 lg:gap-16  xl:gap-24 2xl:gap-28 '>
                <div className='w-[604px] h-[650px] max-md:w-full max-md:h-[500px]  order-1 sm:order-1'>
                    <Image src="/images/home/form.png" height={800} width={604} alt="formImage" className='h-full w-full' />
                </div>
                <div className=' flex flex-col   order-1 sm:order-2 max-md:pt-[48px]'>
                    <h2 className='text-2xl font-medium  md:text-4xl md:pb-2'>Always find your space</h2>
                    <h2 className='text-2xl md:text-5xl font-kepler'>in the city of your choice.</h2>
                    <p className='py-4 max-md:py-6'>Fill in the details below or call us at +91 98765 43210</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-[350px] lg:w-[462px] md:mt-4">
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
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                            {errors.city && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='mb-4 max-md:mt-6'>
                            <p className='text-sm'>
                                By clicking the button below, you agree to our Website&nbsp;
                                <span className="underline">Terms of Service</span>
                                &nbsp;and acknowledge our&nbsp;
                                <span className="underline">Privacy Policy</span>.
                            </p>

                        </div>
                        <div className='mb-4 md:flex md:justify-center max-md:py-3'>
                            <input type="checkbox" {...register("newsUpdates")} />
                            <label className='ml-2 text-sm '>{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
                        </div>
                        {/* <div className='border-black border flex px-6 my-1 h-[36px] text center '>

                            <div className='text-base bg-transparent text-center  py-1 text-black '>Submit
                            </div>
                            <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                        </div> */}
                        <div className='w-full'>
                            <ExploreBtn btnName={"submit"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
