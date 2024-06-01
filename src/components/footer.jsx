import React from "react";
import { FaFacebookF, FaLinkedinIn,FaTwitter, FaDribbble  } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import SectionComponent from "./section-component";

function Footer() {
  return (
    <footer>
      <SectionComponent>
      <ul>
        <li>John doe</li>
        <li>Professional Photographer</li>
        <li>Graphic Designer and Frontend Developer</li>
      </ul>
      </SectionComponent>
      <section className="social-link">
        <h2>SOCIAL NETWORK</h2>
        <div className="divider"></div>
        <ul className="social-links">
          <li><FaFacebookF/></li>
          <li><TiSocialGooglePlus/></li>
          <li><FaLinkedinIn/></li>
          <li><FaTwitter/></li>
          <li><FaDribbble/></li>
        </ul>
      </section>
      <SectionComponent>
      <p><strong>New York,</strong> USA</p>
      </SectionComponent>
    </footer>
  );
}

export default Footer;
