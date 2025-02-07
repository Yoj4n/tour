import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import useNavbarState from "../hooks/useNavbarState";

function Navbar() {
  const { isMobile, menuOpen, toggleMenu, isScrolled } = useNavbarState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar si hay un usuario en sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Convertir a objeto
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // Eliminar usuario de sessionStorage
    setUser(null);
    window.location.reload(); // Recargar la página para aplicar cambios
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/">
          <div className="logo-image-navbar"></div>
        </Link>
        
        {isMobile ? (
          <>
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/destinations">Servicios Turísticos</Link></li>
              <li><Link to="/infoTuristica">Información Turística</Link></li>
              <li><Link to="/contact">Contáctenos</Link></li>
              {user ? (
                <li className="dropdown-usuario">
                  <button 
                    className="dropdown-toggle-usuario" 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {user.nombre} {user.apellido} ▼
                  </button>
                  {dropdownOpen && (
                    <ul className="dropdown-menu-usuario">
                      <li><Link to="/perfil">Perfil</Link></li>
                      <li><Link to="/reservas">Reservas</Link></li>
                      <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link to="/login">
                    <button className="btn-book">Iniciar Sesión</button>
                  </Link>
                </li>
              )}
            </ul>
          </>
        ) : (
          <div className="desktop-menu">
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/destinations">Servicios Turísticos</Link></li>
              <li><Link to="/infoTuristica">Información Turística</Link></li>
              <li><Link to="/contact">Contáctenos</Link></li>
            </ul>
            {user ? (
              <div className="dropdown-usuario">
                <button 
                  className="dropdown-toggle-usuario" 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {user.nombre} {user.apellido} ▼
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu-usuario">
                    <li><Link to="/perfil">Perfil</Link></li>
                    <li><Link to="/reservas">Reservas</Link></li>
                    <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="btn-book">Iniciar Sesión</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
