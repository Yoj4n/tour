
import '../../styles/Footer/ContactInfo.css';
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";


const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h3 className="contact-title">CONTACTO</h3>
      <p className="contact-item"><Phone size={20} /> +123 456 789 234</p>
      <p className="contact-item"><Mail size={20} /> contacto@tourcaminante.com</p>
      <p className="contact-item"><MapPin size={20} /> Bogotá, Colombia</p>
    </div>
  );
};

export default ContactInfo;