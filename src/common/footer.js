import Image from "next/image";
import UrbanWRKLogo from '../../public/images/urbanwrk-logo.svg';
import Link from "next/link";
import Facebook from '../../public/images/Facebook.svg'
import Instagram from '../../public/images/Instagram.svg'
import LinkedIn from '../../public/images/LinkedIn.svg'

export default function Footer() {
    return (
        <section id="footer" className="bg-black text-white px-6 py-14 lg:py-20 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px]">
            <div className="flex flex-col justify-between items-start mb-10 lg:mb-16">
                <Image src={UrbanWRKLogo} className="" alt="urbanwrk-logo"/>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="mb-8 grid lg:grid-cols-4 gap-5 lg:gap-10 lg:mb-0">
                    <div className="flex flex-col gap-2 lg:gap-6">
                        <Link href="/about-us" className="text-lg uppercase">About Us</Link>
                        <div className="flex flex-col gap-2">
                            {[{ link: "/sustainability", title: "Sustainability" }].map((el, i) =>
                                <Link className="text-sm font-light" href={el.link} key={i}>
                                    <span className="block">{el.title}</span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-6">
                        <span className="text-lg uppercase">Solutions</span>
                        <div className="flex flex-col gap-2">
                            {[{ link: "/bespoke-office", title: "Bespoke Offices" }].map((el, i) =>
                                <Link className="text-sm font-light" href={el.link} key={i}>
                                    <span className="block">{el.title}</span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-6">
                        <Link href="/location" className="text-lg uppercase">Locations</Link>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-6">
                        <span href="/location" className="text-lg uppercase">Enquiry</span>
                        <div className="flex flex-col gap-2 text-sm font-light">
                            <Link href="tel:+91 9876543210">+ 91 9876543210</Link>
                            <Link href="mailto:hello@urbanwrk.com">hello@urbanwrk.com</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:gap-6 lg:items-center">
                    <div className="flex gap-2">
                        <Link href="/">
                            <Image src={Facebook} alt="facebook" />
                        </Link>
                        <Link href="/">
                            <Image src={Instagram} alt="instagram" />
                        </Link>
                        <Link href="/">
                            <Image src={LinkedIn} alt="linkedin" />
                        </Link>
                    </div>
                    <div className="flex flex-col text-xs gap-5">
                        <span>COPYRIGHT 2020</span>
                        <Link href="/">TERMS OF USE</Link>
                        <Link href="/">PRIVACY POLICY </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
