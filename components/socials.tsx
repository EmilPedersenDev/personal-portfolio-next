import Image from "next/image";
import style from "../styles/__socials.module.scss";

const Socials = () => {
  return (
    <aside className={style.socials}>
      <ul className={style["socials__list"]}>
        <li className={style["socials__list-item"]}>
          <a href="https://www.linkedin.com/in/emil-pedersen-6320ab124/" target="_blank" rel="noreferrer">
            <Image src="/icons/linkedin.svg" height={14} width={14} quality={100} alt="link icon" />
          </a>
        </li>
        <li className={style["socials__list-item"]}>
          <a href="https://github.com/EmilPedersenDev" target="_blank" rel="noreferrer">
            <Image src="/icons/github.svg" height={14} width={14} quality={100} alt="link icon" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Socials;
