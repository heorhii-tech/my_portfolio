import React from "react";
import NavLink from "./NavLink";

function FooterNav({ navLinks, title, returnAs, }) {
  return (
    <div className="footer_nav">
      <h3>{title}</h3>
      <div className="footer_nav_link_wrapper">
        {Object.keys(navLinks).length &&
          navLinks.map((item) => {
            return <NavLink returnAs={returnAs} item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}

export default FooterNav;
