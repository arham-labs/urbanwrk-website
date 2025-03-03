import Image from 'next/image'
import AboutUsCard1 from '../../../public/images/home/aboutUs1.webp'

export default function AboutCard() {
    return (
        <div className='w-full mx-auto'>
            <div className='flex max-lg:hidden'>
                <div className='w-[60%] aspect-[16/11] hidden lg:block relative'> {/* Added relative */}
                    <Image 
                        src={AboutUsCard1} 
                        alt="meeting space" 
                        layout='fill' // Ensures the image covers the container
                        objectFit='cover' // Ensures the image does not get distorted
                        unoptimized
                    />
                </div>
                <div className='w-1/2 flex flex-col justify-center pl-12'>
                    <>
                        <h1 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl pb-8 text-black'>
                            Work,<span className='font-kepler text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px]'> your way</span>
                        </h1>
                        <p className='text-base pb-4 font-normal text-black'>
                            We are UrbanWrk. Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy. <br/><br/>
                            We make offices come alive - with your purpose, the power of your dreams and the dynamic energy of other driven professionals. With the commitment to nurture the planet, we promise that whether you are a large organisation or a solopreneur, we will always help you find the space you need, to leave your mark.
                        </p>
                    </>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='aspect-[10/11] relative'> {/* Added relative */}
                    <Image 
                        src="/images/home/aboutUs-mobile.webp" 
                        alt="meeting space" 
                        layout='fill' // Ensures the image covers the container
                        objectFit='cover' // Ensures the image does not get distorted
                        unoptimized
                    />
                </div>
                <div className='flex flex-col justify-center pt-6'>
                    <>
                        <h1 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl pb-8 text-black'>
                            Work,<span className='font-kepler text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px]'> your way</span>
                        </h1>
                        <p className='text-sm font-normal text-black'>
                            We are UrbanWrk. Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy. We make offices come alive - with your purpose, with the power of your dreams, with the dynamic energy of other driven professionals, with the commitment to nurture the planet and with the promise that whether you are a large organisation or a solopreneur, you will always find the space you need to leave your mark.
                        </p>
                    </>
                </div>
            </div>
        </div>
    )
}
