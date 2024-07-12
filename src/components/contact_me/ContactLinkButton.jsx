import { data } from "autoprefixer";
import classNames from "classnames";
import React from "react";

function ContactLinkButton({
  bgColor,
  text,
  contactIcons,
  dataLink,
  email,
  tel,
}) {
  const butonClasses = classNames("contact_link_button", {
    blue_contact_link_button: bgColor,
  });
  let link = dataLink;
  if (email) {
    link = `mailto:+${dataLink}`;
  } else if (tel) {
    link = `tel:+${dataLink}`;
  }

  return (
    <a className={butonClasses} href={link} target="_blank">
      <img src={contactIcons} />
      {text}
    </a>
  );
}

export default ContactLinkButton;
