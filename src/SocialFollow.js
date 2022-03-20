import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faLinkedin,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com/knightcubexr" className="social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/knightcube" className="social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://knightcube.medium.com" className="social">
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>

      <a href="https://www.twitter.com/knightcube" className="social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
