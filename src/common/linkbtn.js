import Link from "next/link";

export default function LinkButton({ title, href, margin, marginspace, disabled }) {
  return (
    <div className={`group ${disabled}`}>
      <Link href={href ? href : "/"} className={`text-base border-black border px-4 gap-2 flex items-center h-[36px] w-fit transition-all ease-in-out group-hover:bg-primary group-hover:border-primary group-hover:text-white cursor-pointer ${margin
        ? "lg:ml-[75px]"
        : marginspace
          ? "ml-[45px] lg:ml-[70px] xl:ml-[90px]"
          : "ml-0"
        }`}>
        {title}
        <div className="bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')] bg-contain w-[14px] h-[14px] bg-no-repeat"></div>
      </Link>
    </div>
  );
}
