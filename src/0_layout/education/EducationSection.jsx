import React from "react";
import Education from "../../components/education/Education";

function EducationSection({
  hillel2024,
  matrix2023,
  itGidFunction,
  itGidJavaScript,
  hillel2022,
  lawAcademy,
}) {
  return (
    <section className="education_section" id="education">
      <h3 className="education_title">Education</h3>
      <div className="education_content_wrapper">
        <Education
          school1={hillel2024}
          school2={matrix2023}
          school3={itGidJavaScript}
        />
        <Education
          school1={itGidFunction}
          school2={hillel2022}
          school3={lawAcademy}
        />
      </div>
    </section>
  );
}

export default EducationSection;
