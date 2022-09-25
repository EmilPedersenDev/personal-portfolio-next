import type { NextPage } from "next";
import React, { useMemo } from "react";
import Image from "next/image";
import Button from "../components/button";
import appLogo from "../public/images/ep-logo-white.png";
import { NavBarProps } from "../utils/interfaces";

const Navbar: NextPage<NavBarProps> = ({
  isMobileNavOpen,
  toggleMobileNav,
}) => {
  const tabindex = useMemo((): number => {
    return isMobileNavOpen ? 0 : -1;
  }, [isMobileNavOpen]);

  const onMobileNavClick = () => {
    toggleMobileNav();
  };

  const showResume = () => {
    console.log("show resume");
  };

  return (
    <header>
      <nav id="nav">
        <div className="left-nav">
          <Image
            src={appLogo}
            alt="App logo"
            width={30}
            height={37}
            quality={100}
          />
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
              <Button text="Resume" click={showResume} />
            </li>
          </ul>
          <div className="mobile-nav" onClick={toggleMobileNav}>
            <div
              className={`mobile-nav__hamburger ${isMobileNavOpen && "open"}`}
            />
          </div>
        </div>
        <div className={`mobile-nav-overlay ${isMobileNavOpen && "open"}`}>
          <ul className="mobile-nav-overlay__links">
            <li>
              <a href="#about" onClick={onMobileNavClick} tabIndex={tabindex}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={onMobileNavClick}
                tabIndex={tabindex}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onMobileNavClick} tabIndex={tabindex}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
