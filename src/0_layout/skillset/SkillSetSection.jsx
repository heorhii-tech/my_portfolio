import React from "react";
import SkillSetLogo from "../../components/skillset/SkillSetLogo";
import SkillSetTable from "../../components/skillset/SkillSetTable";

function SkillSetSection({ logos, skillset }) {
  return (
    <section className="skillset_section" id="skillset">
      <h3 className="skillset_title">My current skillset</h3>
      <div className="skillset_wrapper">
        <SkillSetLogo logos={logos} />
        <SkillSetTable skillset={skillset} />
      </div>
    </section>
  );
}

export default SkillSetSection;
