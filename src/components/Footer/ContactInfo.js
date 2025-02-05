
import '../../styles/Footer/ContactInfo.css';
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";


const ContactInfo = () => {
  return (
    <div className="contact-container-footer">
      <h3 className="contact-title-footer">CONTACTO</h3>
      <p className="contact-item-footer"><Phone size={20} /> +123 456 789 234</p>
      <p className="contact-item-footer"><Mail size={20} /> contacto@tourcaminante.com</p>
      <p className="contact-item-footer"><MapPin size={20} /> Bogotá, Colombia</p>
    </div>
  );
};

export default ContactInfo;