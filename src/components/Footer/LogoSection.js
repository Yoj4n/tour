import React from "react";
import logo from "../../images/tourelcaminanteAzulVertical.png";
import '../../styles/Footer/LogoSection.css'; // Importa el archivo CSS

const LogoSection = () => {
  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="Tour El Caminante"
        className="logo-image"
      />
      {/* <h2 className="logo-title">Tour</h2>
      <p className="logo-subtitle">EL CAMINANTE</p> */}
      <p className="logo-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default LogoSection;
