import type { AppProps } from "next/app";
import Navbar from "../layout/navbar";
import { WindowContextProvider } from "../components/resizer";
import { ThemeProvider } from "next-themes"
import "../styles/__base.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)
  return (
    <div id="app">
        <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `}
        </Script>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
      <WindowContextProvider>
          <ThemeProvider attribute="class">
            <Navbar />
            <div className="container">
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
      </WindowContextProvider>
    </div>
  );
}

export default MyApp;
