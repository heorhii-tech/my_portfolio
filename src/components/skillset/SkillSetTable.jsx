import React from "react";

function SkillSetTable({ skillset }) {
  console.log(skillset);
  return (
    <div className="skillsset_table">
      {skillset.map((skill) => {
        return Object.entries(skill).map(([key, value]) => {
          return (
            <div className="skill_wrapper" key={key}>
              <h3>{key}</h3>
              <div className="skill_name_wrapper">
                {value.map((val, index) => {
                  return <p key={index}>{val}</p>;
                })}
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}

export default SkillSetTable;
