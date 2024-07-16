import React from "react";
import School from "./School";

function Education({ school1, school2, school3, dividerClass }) {
  return (
    /*<div className="education_block_wrapper">
        <div className="date_wrapper">
          <div className="date_round_wrapper">
            <div className="date">{school1 && school1.year}</div>
            <div className="round"></div>
          </div>
          <div className="date_round_wrapper">
            <div className="date">{school2 && school2.year}</div>
            <div className="round"></div>
          </div>
          <div className="date_round_wrapper">
            <div className="date">{school3 && school3.year}</div>
            <div className="round"></div>
          </div>
        </div>
        <div className="vertical_divider"></div>
        <div className="schools_wrapper">
          <div className="school">
            <p>{school1 && school1.school}</p>
            <p className="school_skills">({school1 && school1.skills})</p>
            <p>{school1 && school1.location}</p>
          </div>
          <div className="school">
            <p>{school2 && school2.school}</p>
            <p className="school_skills">({school2 && school2.skills})</p>
            <p>{school2 && school2.location}</p>
          </div>
          <div className="school">
            <p>{school3 && school3.school}</p>
            <p className="school_skills">({school3 && school3.skills})</p>
            <p>{school3 && school3.location}</p>
          </div>
        </div>
      </div> */
    <div className="education_block_wrapper">
      <div className={dividerClass}></div>

      <School school={school1} />
      <School school={school2} />
      <School school={school3} />
    </div>
  );
}

export default Education;
