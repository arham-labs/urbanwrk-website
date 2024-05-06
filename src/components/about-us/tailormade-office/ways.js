import ActiveCard from '@/common/activecard'

export default function Ways() {
    return (
        <div className="bg-bglight2 py-14 lg:py-20">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
                <div className="w-full lg:w-[500px] text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-10 lg:mb-14 flex flex-col lg:gap-3">
                    <span className="font-medium">See more ways</span>
                    <span className="font-kepler">to finds your space</span>
                </div>
                <ActiveCard />
            </div>
        </div>)
}
