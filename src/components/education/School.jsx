import React from "react";

function School({ school }) {
  return (
    <div className="school_wrapper">
      <p className="date">{school.year}</p>
      <div className="round"></div>

      <div className="school">
        <p>{school && school.school}</p>
        <p className="school_skills">({school && school.skills})</p>
        <p>{school && school.location}</p>
      </div>
    </div>
  );
}

export default School;
