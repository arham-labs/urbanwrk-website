"use client"
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import CommonBtnKnowMore from './commonBtnKnowMore';

export default function FormCard() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission logic here
    };

    return (
        <div className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2 order-1 sm:order-1'>
                <Image src="/images/home/form.png" height={854} width={694} alt="formImage" />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col justify-center p-4 order-1 sm:order-2'>
                <h2 className='text-2xl max-md:font-medium  md:text-5xl'>Always find your space</h2>
                <h2 className='text-2xl md:text-6xl font-kepler'>in the city of your choice.</h2>
                <p className='pt-4'>Fill in the details below or call us at +91 98765 43210</p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-[462px] mt-2">
                    <div className='mb-4'>
                        <label className='block'>Name:</label>
                        <input type="text" {...register("name", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mb-4'>
                        <label className='block'>Email:</label>
                        <input type="text" {...register("email", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mb-4'>
                        <label className='block'>Phone:</label>
                        <input type="text" {...register("phone", { required: true })} className="border-black border-solid border w-full h-[38px]" />
                        {errors.phone && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mb-4'>
                        <label className='block'>City:</label>
                        <select {...register("city", { required: true })} className="border-black border-solid border w-full h-[38px]">
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                        </select>
                        {errors.city && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>
                            By clicking the button below, you agree to our Website&nbsp;
                            <span className="underline">Terms of Service</span>
                            &nbsp;and acknowledge our&nbsp;
                            <span className="underline">Privacy Policy</span>.
                        </p>

                    </div>
                    <div className='mb-4 md:flex md:justify-center'>
                        <input type="checkbox" {...register("newsUpdates")} />
                        <label className='ml-2 text-sm'>{`I'd like to receive the latest news and updates from UrbanWrk.`}</label>
                    </div>
                    <div className='border-black border flex px-6 my-1 h-[36px] w-fit '>

                        <button className='text-base bg-transparent  py-1 text-black '>Submit
                        </button>
                        <Image src="/images/home/btnArrow.svg" height={12} width={12} alt='exploreSvg' className='ml-1' />
                    </div>
                </form>
            </div>
        </div>
    );
}
