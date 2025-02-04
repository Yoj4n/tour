import React from "react";
import FeatureItem from "./FeatureItem";
import "../../styles/About/AboutSection.css";
import logo from "../../images/tourelcaminanteAzulVertical.png";

const AboutSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img
              src={logo}
              alt="Tour El Caminante"
              className="logo-image-nosotros"
            />
          </div>
          <h2 className="about-subtitle">
            AGENCIA OPERADORA LOCAL TOUR EL CAMINANTE
          </h2>
          <div className="about-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy eirmod tempor incididunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed diam nonummy eirmod tempor
              incididunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua..
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy eirmod tempor incididunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed diam nonummy eirmod tempor
              incididunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua..
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy eirmod tempor incididunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed diam nonummy eirmod tempor
              incididunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua..
            </p>
          </div>
        </div>

        <div className="about-features">
          <FeatureItem title="RNT" />
          <FeatureItem title="10 AÑOS" />
          <FeatureItem title="ATENCIÓN AL CLIENTE" />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
