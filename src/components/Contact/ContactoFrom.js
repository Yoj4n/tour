import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "../../styles/Contact/ContactoFrom.css";

const ContactForm = () => {
  return (
    <div className="contact-container">

      <div className="contact-info">
        <h2>PONTE EN CONTACTO 📞</h2>
        <p>Estamos aquí para ayudarte. Si tienes alguna consulta, duda o necesitas asistencia, no dudes en comunicarte con nosotros. Nuestro equipo estará encantado de atenderte y brindarte la mejor solución posible.</p>
        <p className="phone-number">002-010-66269735</p>

        <div className="social-icons">
          <a href="#" className="icon-contact"><FaFacebookF /></a>
          <a href="#" className="icon-contact"><FaInstagram /></a>
          <a href="#" className="icon-contact"><FaYoutube /></a>
          <a href="#" className="icon-contact"><FaWhatsapp /></a>
        </div>


        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?..."
            title="Ubicación en el mapa"
            allowFullScreen
          ></iframe>
        </div>
      </div>


      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" id="nombre" className="contact-input" placeholder="Tu nombre" />

          <input type="email" id="email" className="contact-input" placeholder="Tu correo electrónico" />

          <select id="categoria" className="contact-input">
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="soporte">Soporte</option>
            <option value="consulta">Consulta</option>
          </select>

          <textarea id="mensaje" className="contact-textarea" placeholder="Escribe tu mensaje aquí..."></textarea>

          <button type="submit" className="contact-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
