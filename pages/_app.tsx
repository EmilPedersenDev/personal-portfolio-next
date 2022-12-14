import type { AppProps } from "next/app";
import Navbar from "../layout/navbar";
import { WindowContextProvider } from "../components/resizer";

import "../styles/__base.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
      <WindowContextProvider>
        <Navbar />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </WindowContextProvider>
    </div>
  );
}

export default MyApp;
