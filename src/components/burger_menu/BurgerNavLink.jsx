import React, { act } from "react";

function BurgerNavLink({ link, action, title }) {
  return (
    <a onClick={action} href={link}>
      {title && title}
    </a>
  );
}

export default BurgerNavLink;
