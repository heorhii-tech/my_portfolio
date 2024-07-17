import React from "react";
import { Link } from "react-router-dom";

function Logo({ name }) {
  return (
    name && (
      <Link to="/" className="name">
        {name}
      </Link>
    )
  );
}

export default Logo;
