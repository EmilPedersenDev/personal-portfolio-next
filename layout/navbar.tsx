import React, { useMemo, useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import Socials from "../components/socials";
import appLogo from "../public/images/ep-logo-white.png";
import useWindowScroll from "../utils/scroll";
import { mobileWidth } from "../utils/variables";
import { WindowContext } from "../components/resizer";
import style from "../styles/__navbar.module.scss";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const windowWidth = useContext(WindowContext);
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
    return navbarVisible || mobileNavOpen ? style["navbar-visible"] : "";
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

  const showResume = (): void => {
    window.open("https://www.linkedin.com/in/emil-pedersen-6320ab124/", "_blank");
  };

  return (
    <header>
      <nav id={style.nav} className={navBarClass}>
        <div className={style["left-nav"]}>
          <Link href="/">
            <a>
              <Image src={appLogo} alt="App logo" width={30} height={37} quality={100} />
            </a>
          </Link>
        </div>
        <div className={style["right-nav"]}>
          <ul className={style["desktop-nav"]}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
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
          <div className={style["mobile-nav"]} onClick={onToggleMobileNav}>
            <div className={`${style["mobile-nav__hamburger"]} ${mobileNavOpen && style.open}`} />
          </div>
        </div>
        <div className={`${style["mobile-nav-overlay"]} ${mobileNavOpen && style.open}`}>
          <ul className={style["mobile-nav-overlay__links"]}>
            <li>
              <a href="#about" onClick={onToggleMobileNav} tabIndex={tabindex}>
                About
              </a>
            </li>
            <li>
              <a href="#work" onClick={onToggleMobileNav} tabIndex={tabindex}>
                Work
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
            <li>
              <Button text="Resume" size="small" onClick={showResume} />
            </li>
          </ul>
          <Socials imageSize={{ width: 20, height: 20 }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
