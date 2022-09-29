import type { NextPage } from "next";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Button from "../components/button";
import Socials from "../components/socials";
import appLogo from "../public/images/ep-logo-white.png";
import useWindowSize from "../utils/resize";
import useWindowScroll from "../utils/scroll";
import { mobileWidth } from "../utils/variables";

const Navbar: NextPage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [windowWidth]: Array<number> = useWindowSize();
  const navbarVisible: boolean = useWindowScroll();

  useEffect((): void => {
    if (windowWidth > mobileWidth) {
      setMobileNavOpen(false);
    }
  }, [windowWidth]);

  // If mobile nav is open, then toggle the body elements
  // overflow Y
  useEffect((): void => {
    const bodyEl = document.getElementsByTagName("body")[0];

    if (!bodyEl) return;

    if (mobileNavOpen) {
      bodyEl.style.overflowY = "hidden";
    } else {
      bodyEl.style.overflowY = "auto";
    }
  }, [mobileNavOpen]);

  const navBarClass = useMemo((): string => {
    return navbarVisible || mobileNavOpen ? "navbar-visible" : "";
  }, [navbarVisible, mobileNavOpen]);

  const onToggleMobileNav = (): void => {
    const isOpen = !mobileNavOpen;
    setMobileNavOpen(isOpen);
  };

  // Mobile links should not be tabbable when the
  // mobile nav is closed
  const tabindex = useMemo((): number => {
    return mobileNavOpen ? 0 : -1;
  }, [mobileNavOpen]);

  const showResume = () => {
    console.log("show resume");
  };

  return (
    <header>
      <nav id="nav" className={navBarClass}>
        <div className="left-nav">
          <Image src={appLogo} alt="App logo" width={30} height={37} quality={100} />
        </div>
        <div className="right-nav">
          <ul className="desktop-nav">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Button text="Resume" onClick={showResume} />
            </li>
          </ul>
          <div className="mobile-nav" onClick={onToggleMobileNav}>
            <div className={`mobile-nav__hamburger ${mobileNavOpen && "open"}`} />
          </div>
        </div>
        <div className={`mobile-nav-overlay ${mobileNavOpen && "open"}`}>
          <ul className="mobile-nav-overlay__links">
            <li>
              <a href="#about" onClick={onToggleMobileNav} tabIndex={tabindex}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={onToggleMobileNav} tabIndex={tabindex}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onToggleMobileNav} tabIndex={tabindex}>
                Contact
              </a>
            </li>
          </ul>
          <Socials />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
