import React from "react";

import { socialMedia, contactIcons, moreAboutMeArray } from "../../constants";

import ContactMeSection from "../contact_me/ContactMeSection";

import SectionLayout from "../section/SectionLayout";
import UpLinkButton from "../../components/up_link_button/UpLinkButton";

function MoreAboutMeLayout(props) {
  return (
    <div>
      <div className="wrapper">
        {moreAboutMeArray.map((item, index) => {
          return (
            <SectionLayout
              key={index}
              sectionClassName={item.className}
              subTitleText={item.text}
              extra_text={item.extra_text}
              imgBlockClass={item.imgClass}
              img={item.img}
            />
          );
        })}
        <ContactMeSection
          contactIcons={contactIcons}
          socialMedia={socialMedia}
        />
      </div>
      <UpLinkButton />
    </div>
  );
}

export default MoreAboutMeLayout;
