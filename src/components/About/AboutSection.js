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
          <h3 className="about-subtitle">
            Descubre el Corazón de la Amazonía Colombiana con Pasión y
            Experiencia
          </h3>
          <div className="about-description">
            <p>
              En TOUR EL CAMINANTE, nos dedicamos a ofrecer experiencias
              auténticas y sostenibles en San José del Guaviare, un destino que
              fusiona la majestuosidad de la selva amazónica, la riqueza
              arqueológica y las tradiciones ancestrales. Nos apasiona conectar
              a los viajeros con la naturaleza, la cultura local y los secretos
              mejor guardados de esta región, promoviendo un turismo responsable
              que beneficie a las comunidades y preserve el medio ambiente
            </p>
            <p>
              Con más de 6 años de experiencia, nuestros guías baquianos
              (expertos locales) conocen cada rincón de Guaviare. Desde la
              Serranía de La Lindosa con sus pinturas rupestres de 12 mil años
              13, hasta los delfines rosados en la Laguna Damas de Nare 111,
              garantizamos aventuras seguras y enriquecedoras.
            </p>
            <p>
              Guaviare no es solo un destino; es una lección de humildad frente
              a la inmensidad de la naturaleza ¿Listo para explorar con
              nosotros? Contáctanos y diseña tu viaje soñado
            </p>
          </div>
        </div>

        <div className="about-features">
          <FeatureItem
            title="RNT"
            conten="Empresa registrada ante el Registro Nacional de Turismo, garantizando servicios legales y de calidad"
          />
          <FeatureItem
            title="10 AÑOS"
            conten="Respaldados por una década diseñando tours únicos, conociendo cada
          secreto del Guaviare."
          />
          <FeatureItem title="ATENCIÓN AL CLIENTE" 
          conten="Asistencia personalizada antes, durante y después de tu viaje. ¡Tu tranquilidad es nuestra prioridad!"
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
