import Image from "next/image";
import { ProjectProps } from "../utils/interfaces";
import style from "../styles/__project.module.scss";
import {MouseEvent, useEffect, useMemo, useState} from "react";
import Tooltip from "../components/tooltip";
import {useTheme} from "next-themes";


const Project = ({ goToWebsite, visibleProject, transitionDelay }: ProjectProps) => {

    const [showTooltip, setShowTooltip] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const { theme } = useTheme();

    useEffect((): void => {
        setIsVisible(true);
    }, [])

    const isDarkTheme: boolean = useMemo((): boolean => {
        return theme === "dark";
    }, [theme]);

  const onAnchorClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.stopPropagation();
  };

  const onHoverProjectItem = (isHovering: boolean): void => {
      if(!visibleProject.links.website && !visibleProject.links.github) {
          setShowTooltip(isHovering);
      }
  }

  return (
    <li className={
        `${style["projects-item"]} 
        ${visibleProject.links.website || visibleProject.links.github ? style["projects-item--clickable"] : ''}
        ${isVisible ? style["projects-item--visible"] : ""}
        `
    }
        style={{
            ["--transition-delay" as string]: transitionDelay + 'ms'
        }}
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
        <Image src={isDarkTheme ? "/icons/code.svg" : "/icons/code-purple.svg"} height={16} width={16} quality={100} alt="code icon" />
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
              <Image src={isDarkTheme ? "/icons/link.svg" : "/icons/link-purple.svg"} height={14} width={14} quality={100} alt="link icon" />
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
              <Image src={isDarkTheme ? "/icons/github.svg" : "/icons/github-purple.svg"} height={16} width={16} quality={100} alt="linkedin icon" />
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;
