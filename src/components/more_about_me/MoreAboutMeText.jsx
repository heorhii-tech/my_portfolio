import React from "react";

function MoreAboutMeText({ moreAboutMeText }) {
  return (
    <div className="more_about_me_text_wrapper">
      {Object.keys(moreAboutMeText) &&
        moreAboutMeText.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
}

export default MoreAboutMeText;
