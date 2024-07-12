import React from "react";
import Name from "./Name";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";

function PersonalInfoBlock({ socialMedia }) {
  return (
    <div className="personal_info_block">
      <Name name={`GEORGE MADZHAROV`} />
      <ContactInfo
        profession={`Front End Developer`}
        country={`Rotterdam,Netherlands`}
        number={`+31 6 55 66 77 88`}
        email={`jorik142@gmail.com`}
      />
      <SocialMedia socialMedia={socialMedia} />
    </div>
  );
}

export default PersonalInfoBlock;
