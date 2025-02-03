import React, { useState } from "react";
import "../styles/Navbar.css";
import useNavbarState from "../hooks/useNavbarState";
import "./Login";
import { Link } from "react-router-dom";

function Navbar() {
  const { isMobile, menuOpen, toggleMenu, isScrolled } = useNavbarState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/">TOUR EL CAMINANTE</Link>
        {isMobile ? (
          <>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li className="dropdown">
                <button  onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-toggle">
                  Sobre Nosotros ▼
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/about/history">Historia</Link></li>
                    <li><Link to="/about/contact">Contáctenos</Link></li>
                    <li><Link to="/about/faq">FAQ</Link></li>
                  </ul>
                )}
              </li>
  
              <li><Link to="/destinations">Destinos</Link></li>
              <li><Link to="/vistaDetalle">Destinos</Link></li>
              <li>
                <Link to="/login">
                  <button className="btn-book">Login</button>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <div className="desktop-menu">
            <ul className="nav-links">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li 
                className="dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button  onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-toggle">
                  Sobre Nosotros ▼
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/about/history">Historia</Link></li>
                    <li><Link to="/about/contact">Contáctenos</Link></li>
                    <li><Link to="/about/faq">FAQ</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/destinations">Destinos</Link>
              </li>
              <li>
                <Link to="/vistaDetalle">Paquetes</Link>
              </li>
              <li>
                <a href="www.google.com">Contact</a>
              </li>
            </ul>
            <Link to="/login">
              <button className="btn-book">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
