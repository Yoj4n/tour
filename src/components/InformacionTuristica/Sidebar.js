import React from "react";
import "../../styles/InfoTuristica/Sidebar.css";



const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>ABOUT TOUR EL CAMINANTE</h2>
      <div className="sidebar-logo">
        <img src="logo.png" alt="Tour El Caminante" />
      </div>
      <p>
        Descubre los mejores destinos del Guaviare, un paraíso de biodiversidad
        y cultura ancestral.
      </p>
      <h3>INFORMACIÓN RECIENTE</h3>
      <ul>
        <li>
          <a href="#">Cerros de Mavicure</a>
          <span>Actualizado en 2025</span>
        </li>
        <li>
          <a href="#">Puerta de Orión</a>
          <span>Actualizado en 2025</span>
        </li>
        <li>
          <a href="#">Caño Lajas</a>
          <span>Actualizado en 2025</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
