import React from "react";
import TitleBlock from "../../components/section/TitleBlock";
import ImgBlock from "../../components/section/ImgBlock";
import Button from "../../components/section/Link";

function SectionLayout({
  sectionClassName,

  titleText,
  subTitleText,
  profession,
  titleBlockClass,
  imgBlockClass,
  img,
  link1,
  link2,
  link1Text,
  link1SubClass,
  CV,
  download,
  link2SubClass,
  link2Text,
  id,
  link,
  extra_text,
  projectLink,
}) {
  return (
    <section className={sectionClassName} id={id}>
      <div className="title_block_wrapper">
        <TitleBlock
          profession={profession}
          titleText={titleText}
          subTitleText={subTitleText}
          titleBlockClass={`title_block`}
          extra_text={extra_text}
        />
        <div className="buttons_wrapper">
          {link1 && (
            <Button
              text={link1Text}
              subClass={link1SubClass}
              link={link}
              projectLink={projectLink}
            />
          )}
          {link2 && (
            <Button
              text={link2Text}
              subClass={link2SubClass}
              download={download}
              link={CV}
              blank={true}
            />
          )}
        </div>
      </div>
      <ImgBlock imgBlockClass={imgBlockClass} img={img} />
    </section>
  );
}

export default SectionLayout;
