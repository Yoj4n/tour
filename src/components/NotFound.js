import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Importamos los estilos


const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Página no encontrada</h2>
      <p className="notfound-text">
        Lo sentimos, la página que buscas no existe o no tienes permiso para verla.
      </p>
      <Link to="/" className="notfound-button">Volver al inicio</Link>
     
    </div>
  );
};

export default NotFound;
