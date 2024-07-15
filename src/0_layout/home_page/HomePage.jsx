import React from "react";
import CV from "../../files/CV.pdf";
import HeaderLayout from "../../0_layout/header/HeaderLayout";
import SectionLayout from "../../0_layout/section/SectionLayout";
import EducationSection from "../education/EducationSection";
import SkillSetSection from "../skillset/SkillSetSection";
import ContactMeSection from "../contact_me/ContactMeSection";
import FooterSection from "../footer/FooterSection";

import {
  name,
  titleText,
  subTitleText,
  profession,
  aboutMeImg,
  titleImg,
  aboutMeText,
  hillel2024,
  matrix2023,
  itGidJavaScript,
  itGidFunction,
  logos,
  skillset,
  contactIcons,
  socialMedia,
  hillel2022,
  lawAcademy,
} from "../../constants";
import ProjectsLayout from "../projects/ProjectsLayout";

function HomePage(props) {
  return (
    <>
      <div className="wrapper">
        <SectionLayout
          sectionClassName={`title_section`}
          titleText={titleText}
          subTitleText={subTitleText}
          profession={profession}
          imgBlockClass={`photo`}
          img={titleImg}
          link2={true}
          link1Text={`Contact Me`}
          link1SubClass={`blue_button`}
          link2Text={`Download CV`}
          link2SubClass={`white_button`}
          CV={CV}
          download={true}
        />
        <SectionLayout
          sectionClassName={`aboutMe_section`}
          titleBlockClass={`about_me_title`}
          imgBlockClass={`about_me_img`}
          img={aboutMeImg}
          titleText={`About Me`}
          subTitleText={aboutMeText}
          titleClass={`about_me_title`}
          link1={true}
          link1Text={`More About Me`}
          link1SubClass={`blue_button`}
          id={`aboutMe`}
          link={`more_about_me`}
        />
        <SkillSetSection logos={logos} skillset={skillset} />
        <div className="education_wrapper">
          <EducationSection
            hillel2024={hillel2024}
            matrix2023={matrix2023}
            itGidJavaScript={itGidJavaScript}
            itGidFunction={itGidFunction}
            hillel2022={hillel2022}
            lawAcademy={lawAcademy}
          />
          <ProjectsLayout />

          <ContactMeSection
            contactIcons={contactIcons}
            socialMedia={socialMedia}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
