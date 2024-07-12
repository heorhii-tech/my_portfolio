import React from "react";

function ImgBlock({ imgBlockClass, img }) {
  return <img className={imgBlockClass} src={img} />;
}

export default ImgBlock;
