import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Navbar from "../layout/navbar";
import Socials from "../components/socials";
import "../styles/__base.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      console.log("resize", window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return function cleanupListener() {
      window.removeEventListener("resize", handleResize);
    };
  });

  const onToggleMobileNav = (): void => {
    const isOpen = !mobileNavOpen;
    setMobileNavOpen(isOpen);
  };

  return (
    <div id="app">
      <Navbar
        isMobileNavOpen={mobileNavOpen}
        toggleMobileNav={onToggleMobileNav}
      />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Socials />
    </div>
  );
}

export default MyApp;
