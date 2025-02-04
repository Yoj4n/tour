import React from "react";
import FeatureItem from "./FeatureItem";
import "../../styles/About/AboutSection.css"; // Importar estilos específicos

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">SOBRE NOSOTROS</h2>

      <div className="about-container">
        {/* Imagen Principal */}
        <div className="about-image">
          <span>[Imagen aquí]</span>
        </div>
        

        {/* Características */}
        <div className="about-features">
          <FeatureItem title="RNT" />
          <FeatureItem title="10 AÑOS" />
          <FeatureItem title="ATENCIÓN AL CLIENTE" />
        </div>
        <div className="about-description">
        <h3 className="about-subtitle">
          AGENCIA OPERADORA LOCAL TOUR EL CAMINANTE
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy eirmod tempor incididunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua...
        </p>
      </div>
      </div>

      {/* Descripción */}
      
    </section>
  );
};

export default AboutSection;


