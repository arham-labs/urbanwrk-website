import Image from 'next/image';

export default function HeroBanner() {
    return (
        <div className='bg-bglight1'>
            <div className='flex flex-col lg:flex-row lg:h-[100vh]'>
                <div className='lg:hidden lg:w-1/2 max-lg:h-[419px] '>
                    <Image
                        src="/images/careers/mob-banner.jpg"
                        alt="banner"
                        height={1920}
                        width={1080}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='hidden lg:block lg:w-1/2 max-lg:h-[419px] '>
                    <Image
                        src="/images/careers/desk-banner.jpg"
                        alt="banner"
                        height={1920}
                        width={1080}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='max-w-[1920px] max-md:px-6 lg:mx-auto 2xl:px-[160px] lg:pl-[100px] lg:pr-[40px] lg:w-1/2 flex justify-center flex-col md:px-8  lg:py-20  max-lg:pb-16 max-lg:pt-14 '>
                    <h1 className='text-3xl md:text-5xl lg:text-[56px] text-left leading-tight font-normal  md:max-w-none'>
                        You make <br /><span className='max-md:font-medium md:font-normal font-kepler lg:text-7xl block'>the difference</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
