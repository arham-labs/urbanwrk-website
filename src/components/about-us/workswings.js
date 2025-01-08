import CommonCard from '@/common/commoncard'
import WorkWing1 from '../../../public/images/about-us/workwing-1.png'
import WorkWing2 from '../../../public/images/about-us/workwing-2.png'
import WorkWing3 from '../../../public/images/about-us/workwing-3.png'

export default function WorkSwings() {

    const workwingsData = [
        { title: "Futuristic", alt: "workspace with privacy", source: WorkWing1, desc: "UrbanWrk is redefining the future of workspaces with its cutting-edge IT infrastructure and seamless office management. Here motivation, productivity, and happiness take root for everyone, whether you’re freelancing or a global giant. We make sure every detail is designed to propel you forward." },
        { title: "Characterful", alt: "good workspace environment", source: WorkWing2, desc: "Have an inspiring backstory that you want to integrate in your space design? Or want to give your team the benefits of standing desks? Our dedicated design experts bring your vision to life according to your distinctive tastes and personality." },
        { title: "Progressive", alt: "future ready workspaces", source: WorkWing3, desc: "We're always moving ahead, pushing the envelope with sustainable innovations for a world that never stands still. Find your place in a workspace that mirrors your commitment to making a daily difference. We are here to be champions of your values that fuel positive change." }
    ]

    return (
        <div className="bg-bglight1 py-16 pb-24 lg:py-24">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
                <div className="w-full lg:w-[500px] mb-10 lg:mb-[10%]">
                    <div className="flex items-start gap-0 lg:gap-3 flex-col text-2xl lg:text-4xl xl:text-5xl mb-4 lg:mb-7">
                        <span className="font-medium">Where work</span>
                        <span className="font-kepler">finds wings</span>
                    </div>
                    <p className="leading-6 text-sm xl:text-base font-medium">In a world that moves fast, where ideas burst into life every day, we are a space for the dreamers, the doers, the makers
                        and the innovators. We are here to help you create something meaningful- through our signature hospitality,
                        a community of like-minded members, and an energizing eco-conscious experience.</p>
                </div>
                <CommonCard data={workwingsData} />
            </div>
        </div>)
}