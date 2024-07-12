import React from "react";
import HeaderNav from "../../components/headerNav.jsx/HeaderNav";
import { useLocation } from "react-router";

function HeaderLayout({ headerMenu, returnAs, pathname }) {
  return (
    <header className="header_wrapper" id="header">
      <div className="header">
        <HeaderNav
          headerMenu={headerMenu}
          returnAs={returnAs}
          pathname={pathname}
        />
      </div>
    </header>
  );
}

export default HeaderLayout;
