import Image from "next/image";
import { ProjectProps } from "../utils/interfaces";
import style from "../styles/__project.module.scss";

const Project = ({ goToWebsite, visibleProject }: ProjectProps) => {
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
          <div className={style["image-wrapper"]}>
            <a href={visibleProject.links.website} target="_blank" rel="noreferrer" aria-label="external link">
              <Image src="/icons/link.svg" height={14} width={14} quality={100} alt="link icon" />
            </a>
          </div>
        )}
        {visibleProject.links.github && (
          <div className={style["image-wrapper"]}>
            <Image src="/icons/github.svg" height={16} width={16} quality={100} alt="linkedin icon" />
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;
