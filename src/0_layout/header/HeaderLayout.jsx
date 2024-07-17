import React from "react";
import HeaderNav from "../../components/header/HeaderNav";
import Logo from "../../components/header/Logo";
import BurgerMenuLayout from "../burger_menu/BurgerMenuLayout";

function HeaderLayout({ headerMenu, returnAs, pathname, name }) {
  return (
    <header className="header_wrapper" id="header">
      <div className="header">
        <Logo name={name} />
        <HeaderNav
          headerMenu={headerMenu}
          returnAs={returnAs}
          pathname={pathname}
        />
        <BurgerMenuLayout headerMenu={headerMenu} />
      </div>
    </header>
  );
}

export default HeaderLayout;
