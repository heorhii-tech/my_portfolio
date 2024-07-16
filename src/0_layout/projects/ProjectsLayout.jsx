import React from "react";
import Card from "../../components/projects/ProjectCard";
import { projects } from "../../constants";
import ProjectCard from "../../components/projects/ProjectCard";

function ProjectsLayout(props) {
  return (
    <section className="projects_section">
      <h2 className="project_title">Projects</h2>
      <div className="cards_wrapper">
        {Object.keys(projects).length &&
          projects.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                title={item.title}
                img={item.img}
                linkDemo={item.linkDemo}
                subClass={`blue_button`}
                linkGit={item.linkGit}
                subTitle={item.subTitle}
              />
            );
          })}
      </div>
    </section>
  );
}

export default ProjectsLayout;
