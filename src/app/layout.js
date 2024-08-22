import { Work_Sans } from "next/font/google";
import "./globals.css"; // Assuming this is your global CSS file

//for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/common/footer";
import Header from "@/components/header";
import Chat from "@/components/chat";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";


const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanWrk",
  icons: '/images/favicon.svg',
  description: "UrbanWrk",
  metadataBase: new URL("https://www.urbanwrk.com"),
  alternates: {
    canonical: "/",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="IF080pkdIc-Uf3IJgcBxkOGW5TmUtUPX5FYw4ZBuk2I" />
        <Script
          id="gtag"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-09VS8X6Q2L"
        />
        <Script id="google-analytics-setup">{`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-09VS8X6Q2L');
        `}</Script>
      </head>
      <body className={worksans.className}>
        <Header />
        {children}
        <Chat />
        <Footer />
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
