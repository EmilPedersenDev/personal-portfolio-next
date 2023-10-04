import type { AppProps } from "next/app";
import Navbar from "../layout/navbar";
import { WindowContextProvider } from "../components/resizer";
import { ThemeProvider } from "next-themes"
import "../styles/__base.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
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
