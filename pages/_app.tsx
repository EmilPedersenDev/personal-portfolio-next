import type {AppProps} from "next/app";
import Navbar from "../layout/navbar";
import {WindowContextProvider} from "../components/resizer";
import {ThemeProvider} from "next-themes"
import "../styles/__base.scss";
import Script from "next/script";
import CookieBanner from "../components/cookie-banner";
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}: AppProps) {

    const [useCookies, setUseCookies] = useState(false);
    const [cookieSelected, setCookieSelected] = useState(true);

    useEffect((): void => {
        const acceptCookies: string | null = localStorage.getItem("acceptCookies");
        if (typeof acceptCookies === "string") {
            setUseCookies(!!JSON.parse(acceptCookies))
            setCookieSelected(true);
        } else {
            setCookieSelected(false);
        }
    }, [])

    const onCookieBannerClick = (acceptCookies: boolean): void => {
        localStorage.setItem("acceptCookies", JSON.stringify(acceptCookies));
        setUseCookies(acceptCookies);
        setCookieSelected(true);
    };

    return (
        <div id="app">
            {cookieSelected && useCookies && (
                <div>
                    <Script id="google-analytics">
                        {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                    `}
                    </Script>
                    <Script async
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}/>
                </div>
            )}
            <WindowContextProvider>
                <ThemeProvider attribute="class">
                    <Navbar/>
                    <div className="container">
                        <Component {...pageProps} />
                    </div>
                    {!cookieSelected && (
                        <CookieBanner onClick={onCookieBannerClick}/>
                    )}
                </ThemeProvider>
            </WindowContextProvider>
        </div>
    );
}

export default MyApp;
