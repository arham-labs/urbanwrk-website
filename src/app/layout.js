import { Work_Sans } from "next/font/google";
import "./globals.css"; // Assuming this is your global CSS file

//for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/common/footer";

const worksans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
