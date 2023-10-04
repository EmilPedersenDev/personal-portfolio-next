import React, { useMemo, useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import Socials from "../components/socials";
import appLogoWhite from "../public/images/ep-logo-white.png";
import appLogoBlack from "../public/images/ep-logo-black.png";
import useWindowScroll from "../utils/scroll";
import { mobileWidth } from "../utils/variables";
import { WindowContext } from "../components/resizer";
import { useTheme } from "next-themes";
import style from "../styles/__navbar.module.scss";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState((): boolean => true);
  const windowWidth: number = useContext(WindowContext);
  const navbarVisible: boolean = useWindowScroll();
  const { theme, setTheme } = useTheme();

  useEffect((): void => {
    if (windowWidth > mobileWidth) {
      setMobileNavOpen(false);
    }
  }, [windowWidth]);

  useEffect((): void => {
    isDarkMode ? setTheme('dark'): setTheme("light")
  }, [isDarkMode])

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

  const toggleTheme = (isDarkMode: boolean): void => {
    setIsDarkMode(isDarkMode)
  }

  return (
    <header>
      <nav id={style.nav} className={navBarClass}>
        <div className={style["left-nav"]}>
          <Link href="/">
            <a>
              <Image src={theme === "dark" ? appLogoWhite : appLogoBlack} alt="App logo" width={30} height={37} quality={100} />
            </a>
          </Link>
        </div>
        <div className={style["right-nav"]}>
          <ul className={style["desktop-nav"]}>
            <li className={style["theme-toggle"]}>
              <DarkModeToggle
                  className={`${style["theme-toggle__btn"]} ${style["theme-toggle__btn--desktop"]}`}
                  onChange={toggleTheme}
                  checked={isDarkMode}
                  size={50}
              />
            </li>
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
          <DarkModeToggle
              className={`${style["theme-toggle__btn"]} ${style["theme-toggle__btn--mobile"]}`}
              onChange={toggleTheme}
              checked={isDarkMode}
              size={50}
          />
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
