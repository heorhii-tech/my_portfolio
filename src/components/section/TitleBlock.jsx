import React from "react";

function TitleBlock({
  name,
  titleText,
  subTitleText,
  profession,
  titleBlockClass,
}) {
  return (
    <div className={titleBlockClass}>
      {name && <h1 className="name">{name}</h1>}
      {profession && <h4 className="profession">{profession}</h4>}
      {titleText && <h2 className="title_text">{titleText}</h2>}
      {Array.isArray(subTitleText) ? (
        subTitleText.map((item) => {
          return (
            <p className="sub_title" key={item}>
              {item}
            </p>
          );
        })
      ) : (
        <h4 className="sub_title">{subTitleText}</h4>
      )}
    </div>
  );
}

export default TitleBlock;
