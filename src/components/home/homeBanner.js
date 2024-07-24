import Image from 'next/image'
import BannerImage from '../../../public/images/home/homeBanner1.webp'

export default function HomeBanner() {
    return (
        <>
            <div className='h-screen hidden lg:block'>
                <Image 
                    src={BannerImage} 
                    alt="home banner"
                    className='h-full w-full object-cover' 
                    priority
                    layout='fill' // Ensures the image covers the container properly
                    unoptimized
                />
            </div>
            <div className='lg:hidden h-screen'>
                <Image 
                    src="/images/home/mobile-banner1.webp" 
                    alt="home banner" 
                    height={375} 
                    width={720} 
                    className='h-full w-full object-cover' 
                    priority
                    unoptimized
                />
            </div>
        </>
    )
}
