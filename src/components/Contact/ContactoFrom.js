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
      {/* Información de contacto */}
      <div className="contactanos-info">
        <h2>PONTE EN CONTACTO 📞</h2>
        <p>
          ¿Tienes alguna duda o necesitas ayuda? Escríbenos y nos pondremos en
          contacto contigo.
        </p>
        <p className="phone-number">002-010-66269735</p>

        {/* Redes sociales */}
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

        {/* Mapa */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?..."
            title="Ubicación en el mapa"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Formulario */}
      <div className="contactanos-form">
        <form className="contact-form">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" className="contact-input" placeholder="Nombre" />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" className="contact-input" placeholder="Correo electrónico" />

          <label htmlFor="categoria">Categoría</label>
          <select id="categoria" className="contact-input">
            <option value="" disabled selected>Selecciona una categoría</option>
            <option value="soporte">Soporte</option>
            <option value="consulta">Consulta</option>
          </select>

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" className="contact-textarea" placeholder="Escribe tu mensaje aquí..."></textarea>

          <button type="submit" className="contact-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
