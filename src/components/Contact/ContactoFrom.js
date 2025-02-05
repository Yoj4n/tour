import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "../../styles/Contact/ContactoFrom.css";

const ContactForm = () => {
  return (
    <div className="contactanos-container">
      <div className="contactanos-info">
        <h2>GET IN TOUCH</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.
        </p>
        <p className="phone-number">002-010-66269735</p>
        
        
        <div className="social-icons">
          <a href="#" className="icon"><FaFacebookF /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaYoutube /></a>
          <a href="#" className="icon"><FaWhatsapp /></a>
        </div>

        
        <div className="map-placeholder"></div>
      </div>

      <div className="contactanos-form">
        <input type="text" placeholder="Nombre" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <select className="input-field">
          <option>Subject</option>
        </select>
        <textarea placeholder="Write Your Message Here..." className="textarea-field"></textarea>
        <button className="send-button">SEND</button>
      </div>
    </div>
  );
};

export default ContactForm;
