import React from "react";

function SocialMedia({ socialMedia }) {
  return (
    <div className="social_media_wrapper">
      {Object.keys(socialMedia).length &&
        socialMedia.map((item) => {
          return (
            <a
              key={item.id}
              className="social_media_link"
              href={item.link}
              target="_blank"
            >
              <img src={item.icon} />
            </a>
          );
        })}
    </div>
  );
}

export default SocialMedia;
