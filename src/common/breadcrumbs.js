import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadCrumbs({ subtitle, subpathname, nestedpage, nestedtitle, nestedpathname }) {
    return (
        <div className="mx-auto py-3 px-6 md:px-12 md:py-0 lg:px-[100px] 2xl:px-[160px] pt-[90px] md:pt-[70px]">
            <div className="flex gap-1 items-center text-accent text-[15px] lg:text-[18px] lg:py-6">
                <a href="/">Home</a>
                <NavigateNextIcon fontSize="small" />
                <a href={subpathname} className="capitalize">{subtitle}</a>
                {nestedpage &&
                    <>
                        <NavigateNextIcon fontSize="small" />
                        <a href={nestedpathname}>{nestedtitle}</a>
                    </>
                }
            </div>
        </div>
    )
}
