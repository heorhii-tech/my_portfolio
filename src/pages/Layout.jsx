import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderLayout from "../0_layout/header/HeaderLayout";
import ScrollToTop from "../utils/ScrollToTop";
import {
  headerMenu as deafaultHeaderMenu,
  aboutMeHeader,
  socialMedia,
  footerMenu as defaultFooterManu,
  aboutMeFooter,
} from "../constants";
import FooterSection from "../0_layout/footer/FooterSection";

function Layout(props) {
  let returnAs;
  const { pathname } = useLocation();
  let headerMenu = deafaultHeaderMenu;
  let footerMenu = defaultFooterManu;
  if (pathname === `/more_about_me`) {
    headerMenu = aboutMeHeader;
    footerMenu = aboutMeFooter;
    returnAs = true;
  }

  return (
    <div>
      <main>
        <HeaderLayout
          headerMenu={headerMenu}
          pathname={pathname}
          returnAs={returnAs}
        />
        <Outlet />
        <ScrollToTop />
      </main>
      <FooterSection
        socialMedia={socialMedia}
        navLinks={footerMenu}
        title={`Navigation`}
        returnAs={returnAs}
      />
    </div>
  );
}

export default Layout;
