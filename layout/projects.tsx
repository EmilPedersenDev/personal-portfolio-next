import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/button";
import ObservableSection from "../components/observable-section";
import { projects } from "../utils/data/projects";
import { Project } from "../utils/interfaces";
import ProjectCard from "../layout/project";

const Projects: NextPage = () => {
  const numOfProjectsToShow = 6;
  const defaultProjects: Array<Project> = projects.slice(0, numOfProjectsToShow);

  const [visibleProjects, setVisibleProjects] = useState<Project[]>(defaultProjects);
  const [allProjectsVisible, setAllProjectsVisible] = useState(false);

  const goToWebsite = (visibleProject: Project): void => {
    const link = visibleProject.getMainLink();
    if (!link) return;
    window.open(link, "_blank");
  };

  const toggleProjects = (): void => {
    if (allProjectsVisible) {
      const defaultProjects = visibleProjects.slice(0, numOfProjectsToShow);
      setVisibleProjects(defaultProjects);
    } else {
      const hiddenProjects = projects.slice(numOfProjectsToShow, projects.length);
      setVisibleProjects([...visibleProjects, ...hiddenProjects]);
    }
    setAllProjectsVisible(!allProjectsVisible);
  };

  return (
    <ObservableSection id="projects">
      <div className="projects__wrapper">
        <h2 className="section-header projects__header">Projects</h2>
        <ul className="projects__list">
          {visibleProjects.map((visibleProject, i) => (
            <ProjectCard goToWebsite={goToWebsite} visibleProject={visibleProject} key={i} />
          ))}
        </ul>
        <div className="projects__button">
          <Button text={allProjectsVisible ? "Show Less" : "Show More"} onClick={toggleProjects} />
        </div>
      </div>
    </ObservableSection>
  );
};

export default Projects;
