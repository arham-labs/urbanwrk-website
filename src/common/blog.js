import Image from "next/image";

export default function Blog() {
    return (
        <div className="bg-bglight3 py-24">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px]">
                <span className="text-xl block mb-8">BLOG</span>
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative">
                            <span className="absolute top-4 left-5 lg:top-6 lg:left-8 uppercase bg-bglight1 p-2 lg:p-3 text-xs font-semibold lg:text-sm">Workspace Solutions</span>
                            <Image src="/images/solutions/blog2.png" width={1000} height={1000} alt="blog-1" className="aspect-square lg:aspect-[5/4]" />
                        </div>
                        <div className="w-full lg:w-[85%] flex flex-col gap-2 lg:gap-4">
                            <span className="text-lg lg:text-2xl leading-6 lg:leading-8 font-semibold">How Flexible Workspaces can meet the demands of today and tomorrow</span>
                            <p className="leading-6 text-sm">A workspace is not just about the work. It is also about providing employees a space that allows them the freedom to work where, when, and how they want.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative">
                        <span className="absolute top-4 left-5 lg:top-6 lg:left-8 uppercase bg-bglight1 p-2 lg:p-3 text-xs font-semibold lg:text-sm">Resources</span>
                            <Image src="/images/solutions/blog1.png" width={1000} height={1000} alt="blog-1" className="aspect-square lg:aspect-[26/35]" />
                        </div>
                        <div className="w-full lg:w-[85%] flex flex-col gap-2 lg:gap-4">
                            <span className="text-lg lg:text-2xl leading-6 lg:leading-8 font-semibold">Why planning your office space is a necessity?</span>
                            <p className="leading-6 text-sm">Locking in on the perfect space is the foremost step to creating a productive office for your company. The next step, however, is even more crucial — deciding the layout of that space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

