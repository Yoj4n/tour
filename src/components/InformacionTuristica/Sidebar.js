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
        Explora la maravillosa biodiversidad del Guaviare, conoce sus ríos,
        pinturas rupestres y naturaleza única.
      </p>
      <h3>INFORMACIÓN AGREGADA RECIENTEMENTE</h3>
      <ul>
        <li>
          <a href="#">BEST JOURNEY TO PEACEFUL PLACES</a>
          <span>February 17, 2022</span>
        </li>
        <li>
          <a href="#">BEST JOURNEY TO PEACEFUL PLACES</a>
          <span>February 17, 2022</span>
        </li>
        <li>
          <a href="#">BEST JOURNEY TO PEACEFUL PLACES</a>
          <span>February 17, 2022</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
