import Image from 'next/image'
import LinkButton from '@/common/linkbtn'

export default function UrbanTech() {
    return (
        <div className='bg-bglight1'>
            <div className='max-lg:hidden'>
                <div className='flex items-center gap-[25px]'>
                    <div className='w-1/2'>
                        <Image src="/images/home/urbanTechl1.webp" unoptimized height={666} width={683} alt="conference room" />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center pl-12'>
                        <>
                            <h2 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl '>Integrate the</h2>
                            <h2 className='font-normal text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] pb-6 font-kepler leading-[1.2] '> next gen of work</h2>
                            <p className='text-base pb-6 w-[80%]'>Step into the future of workspaces where technology empowers productivity. Harness our proprietary app and digital platforms that give you unprecedented insights and enhanced convenience.</p>
                            <LinkButton href="/urbanWrk-tech" title="Explore" />
                        </>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='flex flex-col items-center'>
                    <div className='w-full'>
                        <Image src="/images/home/urbanTech1.webp" unoptimized height={666} width={683} alt="conference room" className='w-full'/>
                    </div>
                    <div className=' flex flex-col justify-center pt-10 '>
                        <>
                            <h2 className='font-normal text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl '>Integrate the</h2>
                            <h2 className='font-normal  text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] pb-6 font-kepler leading-[1.2] '> next gen of work</h2>
                            <p className='text-base pb-6 w-full'>Step into the future of workspaces where technology empowers productivity. Harness our proprietary app and digital platforms that give you unprecedented insights and enhanced convenience.</p>
                            <LinkButton href="/urbanWrk-tech" title="Explore" />
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
