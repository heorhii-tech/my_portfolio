import React, { useEffect, useState } from "react";
import Icon from "../../components/burger_menu/Icon";
import BurgerMenu from "../../components/burger_menu/BurgerMenu";

function BurgerMenuLayout({ headerMenu }) {
  const [burgerOpen, SetBurgerOpen] = useState(false);

  const setBurgerMenu = () => {
    if (burgerOpen) {
      document.body.style.overflow = "auto";
      SetBurgerOpen(false);
    } else if (!burgerOpen) {
      document.body.style.overflow = "hidden";
      SetBurgerOpen(true);
    }
  };
  return (
    <>
      <Icon burgerOpen={burgerOpen} setBurgerMenu={setBurgerMenu} />
      {burgerOpen && (
        <BurgerMenu headerMenu={headerMenu} setBurgerMenu={setBurgerMenu} />
      )}
    </>
  );
}

export default BurgerMenuLayout;
