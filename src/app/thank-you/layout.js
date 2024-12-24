import Head from "next/head";
import Script from "next/script";

export default function Layout({ children }) {
    return (
        <>
            <Script id="google-tag-conversion">{`gtag('event','conversion',{'send_to':'AW-16544436289/F4rnCN-cl_sZEMGggNE9'});`}</Script>
            <section>{children}</section>
        </>
    )
}