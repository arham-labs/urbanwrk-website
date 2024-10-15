import Image from 'next/image'

export default function LookingImageSlider() {

    return (
        <>
            <div className='max-md:hidden '>
                <Image src={`/images/home/exploreCardl1.png`} alt="luxury office space"  height={1000} width={1000} quality={100} className='w-full h-[875px] object-top' />
            </div>
            <div className='md:hidden '>
                <Image src={`/images/home/exploreCardl1.png`} alt="luxury office space"  height={1000} width={1000} quality={100} className='w-full h-[800px]  object-cover' />
            </div>
        </>
    )
}

