import Image from "next/image";
import UrbanWRKLogo from "../../public/images/urbanwrk-logo.svg";
import Link from "next/link";
import Facebook from "../../public/images/Facebook.svg";
import Instagram from "../../public/images/Instagram.svg";
import LinkedIn from "../../public/images/LinkedIn.svg";

export default function Footer() {
  return (
    <section id="footer" className="bg-black text-white py-16 lg:py-20">
      <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
        <a
          href="/"
          className="flex flex-col justify-between items-start mb-10 lg:mb-16 w-fit"
        >
          <Image src={UrbanWRKLogo} className="" alt="urbanwrk-logo" />
        </a>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="mb-8 grid lg:grid-cols-5 gap-5 lg:gap-8 2xl:gap:12 lg:mb-0">
            <div className="flex flex-col gap-2 lg:gap-6">
              <span href="/location" className="text-lg uppercase">
                CONTACT US
              </span>
              <div className="flex flex-col gap-2 text-sm font-light">
                <Link href="tel:+91 8399959996">+91 8399959996</Link>
                <Link href="mailto:hello@urbanwrk.com">hello@urbanwrk.com</Link>
                <p className="lg:w-[90%]">504, Tower A, Peninsula Corporate Park, Senapati Bapat Marg, Lower Parel West, Mumbai, Maharashtra 400013</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-6">
              <a href="/solutions" className="text-lg uppercase">
                Solutions
              </a>
              <div className="flex flex-col gap-2">
                {[
                  {
                    link: "/solutions/tailormade-offices",
                    title: "Tailormade Offices",
                  },
                  {
                    link: "/solutions/ready-to-work-in",
                    title: "Ready-To-Work-In Offices",
                  },
                  {
                    link: "/solutions/virtual-offices",
                    title: "Virtual Offices",
                  },
                  {
                    link: "/solutions/meeting-rooms",
                    title: "Meeting Rooms",
                  },
                  {
                    link: "/solutions/events-launches",
                    title: "Events & Launches",
                  },
                  {
                    link: "/solutions/advertise-with-us",
                    title: "Advertise With Us",
                  },
                ].map((el, i) => (
                  <a className="text-sm font-light" href={el.link} key={i}>
                    <span className="block">{el.title}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-6">
              <span href="/location" className="text-lg uppercase">
                Locations
              </span>
              <div className="flex flex-col gap-2">
                {[{ link: "/delhi", title: "Delhi" }, { link: "/gurgaon", title: "Gurgaon" }, { link: "/hyderabad", title: "Hyderabad" }, { link: "/kolkata", title: "Kolkata" }, { link: "/mumbai", title: "Mumbai" }, { link: "/pune", title: "Pune" }].map((el, i) => (
                  <a className="text-sm font-light" href={el.link} key={i}>
                    <span className="block">{el.title}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-6">
              <a href="/about-us" className="text-lg uppercase">
                About Us
              </a>
              <div className="flex flex-col gap-2">
                {[{ link: "/about-us/sustainability", title: "Sustainability" }, { link: "/about-us/UrbanWrk-Tech", title: "UrbanWrk Tech" }].map(
                  (el, i) => (
                    <a className="text-sm font-light" href={el.link} key={i}>
                      <span className="block">{el.title}</span>
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-6">
              <span className="text-lg uppercase">
                Know More
              </span>
              <div className="flex flex-col gap-2">
                {[{ link: "/blogs", title: "Blogs"}, {link: "/careers", title: "Careers" }].map(
                  (el, i) => (
                    <a className="text-sm font-light" href={el.link} key={i}>
                      <span className="block">{el.title}</span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 lg:items-end lg:w-full">
            <div className="flex gap-2">
              <Link target="_blank" href="https://www.linkedin.com/company/urbanwrk/">
                <Image src={LinkedIn} alt="linkedin" />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/urbanwrk/">
                <Image src={Instagram} alt="instagram" />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/Urbanwrk.official">
                <Image src={Facebook} alt="facebook" />
              </Link>
            </div>
            <div className="flex flex-col text-xs gap-5 relative z-50">
              <span>COPYRIGHT 2025</span>
              <a className="block" href="/terms-of-use">TERMS OF USE</a>
              <a className="block" href="/privacy-policy">PRIVACY POLICY </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
