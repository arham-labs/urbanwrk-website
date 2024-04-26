import CommonCard from '@/app/common/commoncard'

export default function WorkSwings() {
    return (
        <div className="bg-bglight1 py-16 pb-24 lg:py-32">
            <div className="w-[88%] m-auto">
                <div className="w-full lg:w-[500px] mb-10 lg:mb-14">
                    <div className="flex items-center lg:items-start gap-3 lg:flex-col text-2xl lg:text-5xl mb-4 lg:mb-7 gap-y-2">
                        <span className="font-medium">Where work</span>
                        <span className="font-kepler">finds wings</span>
                    </div>
                    <p className="leading-6 text-sm lg:text-abse">In a world that moves fast, where ideas burst into life every day, we are a space for the dreamers, the doers, the makers
                        and the innovators. We are here to help you create something meaningful- through our signature hospitality,
                        a community of like-minded members, and an energizing eco-conscious experience.</p>
                </div>
                <CommonCard top={true} />
            </div>
        </div>)
}