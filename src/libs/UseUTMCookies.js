"use client";
import { useEffect } from "react";


const UseUTMCookies = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-09VS8X6Q2L`;
    document.head.appendChild(script);


    const scriptGTM = document.createElement("script");
    scriptGTM.innerHTML = `(function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NLPRNL43');`;

    document.head.appendChild(scriptGTM);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-09VS8X6Q2L');
    };

    // Track route changes (SPA)
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-09VS8X6Q2L', {
        page_path: url,
      });
    };

    // Function to get URL parameters
    const getUrlParameter = (name) => {
      const regex = new RegExp("[?&]" + name + "=([^&#]*)");
      const results = regex.exec(window.location.search);
      return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
    };

    // Function to get a cookie value
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
          return decodeURIComponent(cookie[1]);
        }
      }
      return null;
    };

    // Function to set cookies
    const setCookie = (name, value, days) => {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
    };

    // List of UTM parameters to capture
    const utmParameters = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_term"];
    const prefix = "event_";

    // Iterate through UTM parameters and set cookies if present in the URL
    utmParameters.forEach((param) => {
      const value = getUrlParameter(param);
      if (value) {
        setCookie(prefix + param, value, 7);
      }
    });

    if(!getCookie("first_visit")){
      setCookie("first_visit",window.location.href,7);
    }

    // utmParameters.forEach((utmParam) => {
    //   const cookieName = "event_" + utmParam;
    //   const cookieValue = getCookie(cookieName);
    //   if (cookieValue) {
    //     console.log(`Set value for ${utmParam}: ${cookieValue}`);
    //   }
    // });

    // Ensure gtag is defined before calling it
    if (window.gtag && getCookie("event_utm_source") && getCookie("event_utm_medium") && getCookie("event_utm_campaign")) {
      window.gtag("set", "campaign_medium", getCookie("event_utm_medium"));
      window.gtag("set", "campaign_name", getCookie("event_utm_campaign"));
      window.gtag("set", "campaign_source", getCookie("event_utm_source"));
    }
  }, []);
};

export default UseUTMCookies;