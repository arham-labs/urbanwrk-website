'use client'

import ExploreBtn from "@/components/home/exploreBtn";
import { useForm } from "react-hook-form";

export default function HomeBuild() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission logic here
    };


    const brandData = ["Private, fully-customisable and branded office space ready within 45-60 days", "Designed by experts and WELL and LEED certified",
        "Flexible lease terms with utility costs included", "Complete administrative management including visitor management and payroll",
        "Access to co-working spaces, lounges, WellnessWrk Gym and BuzzWrk Café", "Exclusive access to all our events, seminars and industry talks"
    ]
    return (
        <div className="py-16 lg:py-20 px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px] flex flex-col gap-7 lg:gap-0 lg:flex-row items-center">
            <div className="flex flex-col w-full lg:w-1/2">
                <div className="w-full lg:w-[88%]">
                    <div className="flex flex-col text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-7">
                        <span className="font-medium">Build a home</span>
                        <span className="font-kepler">for your brand</span>
                    </div>
                    <p className="leading-6 text-sm xl:text-base font-normal lg:font-medium mb-7">Starting from the blueprint, you get to collaborate with our team in bringing your vision come alive at every step. Build the office you always dreamt of, sustainable, eco-conscious and aesthetically superior, which you, your team and your client would love to visit again and again.</p>
                    <ul className="text-sm flex flex-col font-medium gap-6 lg:gap-4 w-auto lg:w-[80%] list-disc ml-6 lg:ml-7">
                        {brandData.map((el, i) =>
                            <li key={i}>{el}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-1/2 bg-bglight1 p-5 lg:p-12">
                <div className='flex flex-col justify-center'>
                    <span className="mb-5 text-xl font-medium">Get in touch</span>
                    <p className="mb-5 w-[300px]">Tell us what you need and our team will work out the best space for it.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div className='mb-4'>
                            <label className='block font-semibold'>Name:</label>
                            <input type="text" {...register("name", { required: true })} className="border-black border-solid border bg-bglight1 w-full h-[38px]" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='mb-4'>
                            <label className='block font-semibold'>Email:</label>
                            <input type="text" {...register("email", { required: true })} className="border-black border-solid border bg-bglight1 w-full h-[38px]" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='mb-4'>
                            <label className='block font-semibold'>Phone:</label>
                            <input type="text" {...register("phone", { required: true })} className="border-black border-solid border bg-bglight1 w-full h-[38px]" />
                            {errors.phone && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='mb-4'>
                            <label className='block font-semibold'>City:</label>
                            <select {...register("city", { required: true })} className="border-black border-solid border bg-bglight1 w-full h-[38px]">
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                            {errors.city && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='w-full mt-2'>
                            <ExploreBtn btnName={"submit"} />
                            <span className="font-medium mt-2 block">or call us at +91 98765 43210</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

