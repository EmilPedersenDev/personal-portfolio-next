import Image from "next/image";
import style from "../styles/__socials.module.scss";
import { SocialsProp } from "../utils/interfaces";
import {useMemo} from "react";
import {useTheme} from "next-themes";

const Socials = ({ imageSize }: SocialsProp) => {
  const { theme } = useTheme();

  const isDarkTheme: boolean = useMemo((): boolean => {
    return theme === "dark";
  }, [theme]);

  return (
    <aside className={style.socials}>
      <ul className={style["socials__list"]}>
        <li className={style["socials__list-item"]}>
          <a href="https://www.linkedin.com/in/emil-pedersen-6320ab124/" target="_blank" rel="noreferrer">
            <Image
              src={isDarkTheme ? "/icons/linkedin.svg" : "/icons/linkedin-purple.svg"}
              height={imageSize.height}
              width={imageSize.width}
              quality={100}
              alt="link icon"
            />
          </a>
        </li>
        <li className={style["socials__list-item"]}>
          <a href="https://github.com/EmilPedersenDev" target="_blank" rel="noreferrer">
            <Image
              src={isDarkTheme ? "/icons/github.svg" : "/icons/github-purple.svg"}
              height={imageSize.height}
              width={imageSize.width}
              quality={100}
              alt="link icon"
            />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Socials;
