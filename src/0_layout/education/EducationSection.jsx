import React from "react";
import Education from "../../components/education/Education";

function EducationSection({
  hillel2024,
  matrix2023,
  itGidFunction,
  itGidJavaScript,
}) {
  return (
    <section className="education_section" id="education">
      <h3 className="education_title">Education</h3>
      <div className="education_content_wrapper">
        <Education school1={hillel2024} school2={matrix2023} />
        <Education school1={itGidJavaScript} school2={itGidFunction} />
      </div>
    </section>
  );
}

export default EducationSection;
