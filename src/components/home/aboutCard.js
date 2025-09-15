import Image from 'next/image'
import AboutUsCard1 from '../../../public/images/home/aboutUs1.webp'
import LinkButton from '@/common/linkbtn'

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
                            We are UrbanWrk. Premium managed office spaces where your vision and creativity find shape and reality. Whether you need flexible workspace solutions or fully furnished private offices, we help you build your foundation exactly as you envision it.
                            <br /><br />With a commitment to nurture the planet, our spaces come alive with your purpose, dreams, and the energy of driven professionals. From solo entrepreneurs to enterprises, we provide the solutions you need to leave your mark across India’s business capitals. Experience the future of professional coworking reimagined for modern businesses.
                        </p>
                        <div className='pt-2'>
                            <LinkButton href="mailto:hello@urbanwrk.com" title="Find your space" />
                        </div>
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
                            We are UrbanWrk. Premium managed office spaces where your vision and creativity find shape and reality. Whether you need flexible workspace solutions or fully furnished private offices, we help you build your foundation exactly as you envision it. With a commitment to nurture the planet, our spaces come alive with your purpose, dreams, and the energy of driven professionals. From solo entrepreneurs to enterprises, we provide the solutions you need to leave your mark across India’s business capitals. Experience the future of professional coworking reimagined for modern businesses.
                        </p>
                    </>
                </div>
            </div>
        </div>
    )
}
