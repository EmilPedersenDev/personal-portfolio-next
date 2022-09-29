import { useState, useEffect } from "react";

const useWindowScroll = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);

  useEffect(() => {
    let previousScrollPost = window.pageYOffset;
    setNavBarVisible(true);

    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      if (previousScrollPost > currentScrollPos) {
        setNavBarVisible(true);
      } else {
        setNavBarVisible(false);
      }
      previousScrollPost = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return navBarVisible;
};

export default useWindowScroll;
