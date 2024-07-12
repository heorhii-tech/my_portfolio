import React from "react";
import { Link } from "react-router-dom";

function NavLink({ item, returnAs, pathname }) {
  if (returnAs) {
    return <Link to={item.link}>{item.item}</Link>;
  } else {
    return <a href={item.link}>{item.item}</a>;
  }
}

export default NavLink;
