import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "../../styles/Contact/ContactoFrom.css";

const ContactForm = () => {
  return (
    <div className="contactanos-container">
     
      <div className="contactanos-info">
        <h2>PONTE EN CONTACTO 📞</h2>
        <p>
          ¿Tienes alguna duda o necesitas ayuda? Escríbenos y nos pondremos en
          contacto contigo.
        </p>
        <p className="phone-number">002-010-66269735</p>

        
        <div className="social-icons">
          <a href="#" className="icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="icon" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" className="icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        
        <div className="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31886.458655361886!2d-72.65947159573886!3d2.5693493841616246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e177699aa9e024d%3A0xa81b5573e08a8504!2sSan%20Jos%C3%A9%20Del%20Guaviare%2C%20Guaviare!5e0!3m2!1ses-419!2sco!4v1738727060054!5m2!1ses-419!2sco"
            title="Ubicación en el mapa"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="contactanos-form">
        <form className="contact-form">
          {/* Menú desplegable */}
          
          {/* Correo */}
          <div className="input-group-login">
            <input
              type="email"
              id="email"
              className="contact-input"
              placeholder="Correo electrónico"
            />
          </div>

          {/* Contraseña */}
          <div className="input-group-login">
            <input
              type="password"
              id="password"
              className="contact-input"
              placeholder="Contraseña"
            />
          </div>
          <div className="input-group-login">
            <select id="categoria" className="contact-input">
              <option value="" disabled selected>
                Selecciona una categoría
              </option>
              <option value="soporte">Soporte</option>
              <option value="consulta">Consulta</option>
            </select>
          </div>

          {/* Área de texto */}
          <div className="input-group-login">
            <textarea
              id="mensaje"
              className="contact-textarea"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          {/* Botón */}
          <button type="submit" className="contact-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
