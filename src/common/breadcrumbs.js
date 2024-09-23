import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadCrumbs({ subtitle, subpathname, nestedpage, nestedtitle, nestedpathname }) {
    return (
        <div className="mx-auto py-3 px-6 md:px-12 md:py-0 lg:px-[100px] 2xl:px-[160px] pt-[104px] md:pt-[70px]">
            <div className="flex gap-1 items-center text-accent text-[18px] lg:py-6">
                <Link href="/">Home</Link>
                <NavigateNextIcon fontSize="small" />
                <Link href={subpathname} className="capitalize">{subtitle}</Link>
                {nestedpage &&
                    <>
                        <NavigateNextIcon fontSize="small" />
                        <Link href={nestedpathname}>{nestedtitle}</Link>
                    </>
                }
            </div>
        </div>
    )
}
