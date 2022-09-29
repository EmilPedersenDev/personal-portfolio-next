import Image from "next/image";
import { ProjectProps } from "../utils/interfaces";

const Project = ({ goToWebsite, visibleProject }: ProjectProps) => {
  return (
    <li className="projects-item" onClick={() => goToWebsite(visibleProject)}>
      <div className="projects-item__header">
        <h2>{visibleProject.title}</h2>
        <Image src="/icons/code.svg" height={16} width={16} quality={100} alt="code icon" />
      </div>
      <div className="projects-item__body">
        <p>{visibleProject.description}</p>

        <div className="projects-item__techniques">
          {visibleProject.techniques?.map((technique, j) => (
            <span className="technique__item" key={j}>
              {technique}
            </span>
          ))}
        </div>
      </div>
      <div className="projects-item__footer">
        {visibleProject.links.website && (
          <div className="image-wrapper">
            <a href={visibleProject.links.website} target="_blank" rel="noreferrer" aria-label="external link">
              <Image src="/icons/link.svg" height={14} width={14} quality={100} alt="link icon" />
            </a>
          </div>
        )}
        {visibleProject.links.github && (
          <div className="image-wrapper">
            <Image src="/icons/github.svg" height={16} width={16} quality={100} alt="linkedin icon" />
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;
