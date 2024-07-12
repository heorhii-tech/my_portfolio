import React from "react";

function SkillSetLogo({ logos }) {
  return (
    <div className="skillset">
      {Object.keys(logos).length &&
        logos.map((item) => {
          const currentDate = new Date().toISOString();

          return <img key={item} className="skills_logo" src={item} />;
        })}
    </div>
  );
}

export default SkillSetLogo;
