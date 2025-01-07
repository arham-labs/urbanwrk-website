
import Image from 'next/image';

export default function HeroBanner() {
    return (
        <div className='bg-bglight6'>
            <div className='flex flex-col lg:flex-row pt-16 lg:h-[100vh]'>
                <div className='lg:w-1/2 max-lg:h-[419px] '>
                    <Image
                        src="/images/blogs/banner.png"
                        alt="banner"
                        height={500}
                        width={784}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='max-w-[1920px] max-md:px-6 mx-auto 2xl:px-[160px] lg:pl-[100px] lg:pr-[40px] lg:w-1/2 flex justify-center flex-col md:px-8  lg:py-20  max-lg:pb-16 max-lg:pt-14 '>
                    <h1 className='text-3xl md:text-5xl lg:text-[56px] text-left leading-tight font-normal  md:max-w-none'>
                        Navigating the new <span className='font-kepler lg:text-7xl max-md:font-medium md:font-normal'>ways to work</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
