import Image from "next/image";
import { ProjectProps } from "../utils/interfaces";
import style from "../styles/__project.module.scss";
import { MouseEvent } from "react";

const Project = ({ goToWebsite, visibleProject }: ProjectProps) => {
  const onAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <li className={style["projects-item"]} onClick={() => goToWebsite(visibleProject)}>
      <div className={style["projects-item__header"]}>
        <h2>{visibleProject.title}</h2>
        <Image src="/icons/code.svg" height={16} width={16} quality={100} alt="code icon" />
      </div>
      <div className={style["projects-item__body"]}>
        <p>{visibleProject.description}</p>

        <div className={style["projects-item__techniques"]}>
          {visibleProject.techniques?.map((technique, j) => (
            <span className={style["technique__item"]} key={j}>
              {technique}
            </span>
          ))}
        </div>
      </div>
      <div className={style["projects-item__footer"]}>
        {visibleProject.links.website && (
          <div className="icon-link">
            <a
              href={visibleProject.links.website}
              onClick={onAnchorClick}
              target="_blank"
              rel="noreferrer"
              aria-label="website link"
            >
              <Image src="/icons/link.svg" height={14} width={14} quality={100} alt="link icon" />
            </a>
          </div>
        )}
        {visibleProject.links.github && (
          <div className="icon-link">
            <a
              href={visibleProject.links.github}
              onClick={onAnchorClick}
              target="_blank"
              rel="noreferrer"
              aria-label="github link"
            >
              <Image src="/icons/github.svg" height={16} width={16} quality={100} alt="linkedin icon" />
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;
