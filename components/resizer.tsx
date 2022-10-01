import React, { useEffect, useState, createContext } from "react";
import { ResizerProps } from "../utils/interfaces";

export const WindowContext = createContext(0);

// React context is being used to avoid resize event to
// trigger more than one time
export const WindowContextProvider: React.FC<ResizerProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <WindowContext.Provider value={windowWidth}>{children}</WindowContext.Provider>;
};
