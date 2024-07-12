import React from "react";
import PersonalInfoBlock from "../../components/footer/PersonalInfoBlock";
import FooterNav from "../../components/footer/FooterNav";

function FooterSection({ socialMedia, navLinks, title, returnAs }) {
  return (
    <section className="footer_section">
      <div className="footer">
        <PersonalInfoBlock socialMedia={socialMedia} />
        <FooterNav navLinks={navLinks} title={title} returnAs={returnAs} />
      </div>
    </section>
  );
}

export default FooterSection;
