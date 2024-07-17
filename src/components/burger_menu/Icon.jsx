import React from "react";

function Icon({ setBurgerMenu, burgerOpen }) {
  return (
    <div
      className={
        burgerOpen ? `burger_menu_icon_close` : `burger_menu_icon_open`
      }
      onClick={setBurgerMenu}
    >
      <span class="line1"></span>
      <span class="line2"></span>
    </div>
  );
}

export default Icon;
