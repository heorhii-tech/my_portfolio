import React from "react";

function ContactInfo({ profession, country, number, email }) {
  return (
    <div>
      <h3 className="footer_profession">{profession}</h3>
      <h3 className="footer_country">{country}</h3>
      <h3 className="footer_number">{number}</h3>
      <h3 className="footer_email">{email}</h3>
    </div>
  );
}

export default ContactInfo;
