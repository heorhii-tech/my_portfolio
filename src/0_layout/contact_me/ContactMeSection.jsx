import React from "react";
import ContactLinkButton from "../../components/contact_me/ContactLinkButton";

function ContactMeSection({ contactIcons, socialMedia }) {
  return (
    <section className="contact_me_section" id="contactMe">
      <h3 className="contact_me_title">Contact Me</h3>
      <div className="contact_link_wrapper">
        <ContactLinkButton
          text={`+31 6 38 69 95 61`}
          bgColor={`blue`}
          contactIcons={contactIcons[0]}
          dataLink={`+31 6 38 69 95 61`}
          tel={true}
        />
        <ContactLinkButton
          text={`George Madzharov`}
          contactIcons={contactIcons[1]}
          dataLink={socialMedia[0].link}
        />
        <ContactLinkButton
          text={`jorik142@gmail.com`}
          contactIcons={contactIcons[2]}
          dataLink={`jorik142@gmail.com`}
          email={true}
        />
      </div>
    </section>
  );
}

export default ContactMeSection;
