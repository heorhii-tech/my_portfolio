import React from "react";

import {
  socialMedia,
  contactIcons,
  aboutMeFooter,
  moreAboutMeText,
} from "../../constants";
import FooterSection from "../footer/FooterSection";
import ContactMeSection from "../contact_me/ContactMeSection";
import MoreAboutMeText from "../../components/more_about_me/MoreAboutMeText";
import MoreAboutMePhoto from "../../components/more_about_me/MoreAboutMePhoto";

function MoreAboutMeLayout(props) {
  return (
    <div>
      <div className="wrapper">
        <MoreAboutMePhoto />
        <MoreAboutMeText moreAboutMeText={moreAboutMeText} />
        <ContactMeSection
          contactIcons={contactIcons}
          socialMedia={socialMedia}
        />
      </div>
    </div>
  );
}

export default MoreAboutMeLayout;
