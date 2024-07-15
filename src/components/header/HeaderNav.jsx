import React from "react";
import NavLink from "../footer/NavLink";

function HeaderNav({ headerMenu, returnAs, pathname }) {
  console.log(pathname);
  return (
    <div className="header_nav">
      {headerMenu.map((item) => (
        <NavLink
          key={item.id}
          item={item}
          headerStyle={true}
          returnAs={returnAs}
          pathname={pathname}
        />
      ))}
    </div>
  );
}

export default HeaderNav;
