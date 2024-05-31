import { Work_Sans } from "next/font/google";
import "./globals.css"; // Assuming this is your global CSS file

//for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/common/footer";
import Header2 from "@/components/header2";
import Chat from "@/components/chat";


const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanWrk",
  icons: '/images/favicon.svg',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>

        <Header2/>
        {children}
        <Chat/>
        <Footer/>
      </body>
    </html>
  );
}
