import React from "react";
import Button from "../section/Link";

function ProjectCard({
  title,
  text,
  subClass,
  img,
  linkDemo,
  linkGit,
  subTitle,
}) {
  return (
    <div className="project_card">
      <img src={img} />
      <h3>{title}</h3>
      <h4>({subTitle})</h4>
      <div className="buttons_wrapper">
        <Button
          text={`Live demo`}
          subClass={subClass}
          link={linkDemo}
          projectLink={true}
        />
        <Button
          text={`GitHub`}
          subClass={`white_button`}
          link={linkGit}
          projectLink={true}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
