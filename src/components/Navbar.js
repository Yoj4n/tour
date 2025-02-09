import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import useNavbarState from "../hooks/useNavbarState";

function Navbar() {
  const { isMobile, menuOpen, toggleMenu, isScrolled } = useNavbarState();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const storedUser = sessionStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, [location]); 

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
                <li className="dropdown">
                  <button 
                    className="dropdown-toggle" 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {user.username} {user.lastname} ▼
                  </button>
                  {dropdownOpen && (
                    <ul className="dropdown-menu-user">
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
              <div className="dropdown">
                <button 
                  className="dropdown-toggle" 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {user.username} {user.lastname} ▼
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu-user">
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