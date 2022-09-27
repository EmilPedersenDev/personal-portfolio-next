import type { AppProps } from "next/app";
import Navbar from "../layout/navbar";
import Socials from "../components/socials";
import useWindowSize from "../utils/resize";
import { mobileWidth } from "../utils/variables";
import "../styles/__base.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [windowWidth]: Array<number> = useWindowSize();

  return (
    <div id="app">
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      {windowWidth > mobileWidth && <Socials />}
    </div>
  );
}

export default MyApp;
