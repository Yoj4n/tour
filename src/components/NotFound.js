import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Asegúrate de que la ruta sea la correcta

const NotFound = () => {
  return (
    <div className="notfound-container">
      {/* Fondo animado */}
      <div className="animation-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">¡UPS! Página no encontrada</h2>
        <p className="notfound-text">
          Lo sentimos, la página que buscas no existe o no tienes permiso para verla.
        </p>
        <Link to="/" className="notfound-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
