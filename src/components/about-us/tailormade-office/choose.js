import CommonCard from "@/common/commoncard";

export default function Choose({data}) {

    return (
        <div className="bg-bglight6 py-16 lg:py-20">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
                <span className="text-xl 2xl:text-2xl font-medium block mb-10">WHY CHOOSE US?</span>
                <CommonCard leftAlign={true} data={data?.card2} />
            </div>
        </div>)
}

