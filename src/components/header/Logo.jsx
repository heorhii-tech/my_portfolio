import React from "react";

function Logo({name}) {
  return  name && <h1 className="name">{name}</h1>;
}

export default Logo;
