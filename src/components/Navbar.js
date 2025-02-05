import React, { useState } from "react";
import "../styles/Navbar.css";
import useNavbarState from "../hooks/useNavbarState";
import "./Login";
import { Link } from "react-router-dom";
// import logo from "../images/tourelcaminanteblancohorizontal.png";

function Navbar() {
  const { isMobile, menuOpen, toggleMenu, isScrolled } = useNavbarState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/">
          <div className="logo-image-navbar"></div>
        </Link>
        {isMobile ? (
          <>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/destinations">Servicios Turísticos</Link></li>
              <li><Link to="/vistaDetalle">Información Turística</Link></li>
              <li><Link to="/contact">Contáctenos</Link></li>
              <li>
                <Link to="/login">
                  <button className="btn-book">Iniciar Sesion</button>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <div className="desktop-menu">
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/destinations">Servicios Turísticos</Link></li>
              <li><Link to="/reserva">Información Turística</Link></li>
              <li><Link to="/contact">Contáctenos</Link></li>
            </ul>
            <Link to="/login">
              <button className="btn-book">Iniciar Sesion</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
