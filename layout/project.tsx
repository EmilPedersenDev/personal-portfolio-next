import Image from "next/image";
import { ProjectProps } from "../utils/interfaces";
import style from "../styles/__project.module.scss";
import {MouseEvent, useState} from "react";
import Tooltip from "../components/tooltip";


const Project = ({ goToWebsite, visibleProject }: ProjectProps) => {

    const [showTooltip, setShowTooltip] = useState(false);

  const onAnchorClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.stopPropagation();
  };

  const onHoverProjectItem = (isHovering: boolean): void => {
      if(!visibleProject.links.website && !visibleProject.links.github) {
          setShowTooltip(isHovering);
      }
  }

  return (
    <li className={`${style["projects-item"]} ${visibleProject.links.website || visibleProject.links.github ? style["projects-item--clickable"] : ''}`}
        onClick={() => goToWebsite(visibleProject)}
        onMouseEnter={() => onHoverProjectItem(true)}
        onMouseLeave={() => onHoverProjectItem(false)}
    >
      <div className={style["projects-item__header"]}>
          <div className={style["projects-item__title"]}>
              <h3>{visibleProject.title}</h3>
                  <Tooltip
                      visibleClass={`${showTooltip ? "tooltip--visible" : ''}`}
                      text="There is unfortunately no link to the resource at this moment"
                  />
          </div>
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
