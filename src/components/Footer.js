import "../styles/Footer/Footer.css";

import React from "react";
import LogoSection from "./Footer/LogoSection";
import RecentInfo from "./Footer/RecentInfo";
import ContactInfo from "./Footer/ContactInfo";
import SocialMedia from "./Footer/SocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-wrapper">
          <LogoSection />
          <RecentInfo />
          <ContactInfo />
          <SocialMedia />
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Tour El Caminante. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
