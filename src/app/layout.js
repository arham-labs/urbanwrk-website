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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NLPRNL43');`}</Script>

        <meta name="google-site-verification" content="IF080pkdIc-Uf3IJgcBxkOGW5TmUtUPX5FYw4ZBuk2I" />
        <Script id="gtag" src="https://www.googletagmanager.com/gtag/js?id=G-09VS8X6Q2L"/>

        <Script id="google-analytics-setup">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-09VS8X6Q2L');`}</Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel-code">{`!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '826649021217311'); fbq('track', 'PageView');`}</Script>

        <noscript>
          <iframe
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=826649021217311&ev=PageView&noscript=1"
          ></iframe>
        </noscript>

      </head>
      <body className={worksans.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLPRNL43"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Chat />
        <Footer />
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
