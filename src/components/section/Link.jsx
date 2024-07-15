import React from "react";
import { Link } from "react-router-dom";

function Button({ text, subClass, download, link, projectLink }) {
  console.log(link);
  if (download || projectLink) {
    return (
      <a
        className={subClass + ` title_button`}
        href={link}
        download={download}
        target="_blank"
      >
        {text && text}
      </a>
    );
  } else {
    return (
      <Link className={subClass + ` title_button`} to={link}>
        {text && text}
      </Link>
    );
  }
}

export default Button;
