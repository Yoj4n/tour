import React from "react";
import "../styles/Contact.css";

import Contacto from "../components/Contact/ContactoFrom.js";
import Banner from "../components/Contact/Banner.js";
function Contact() {
  return (
    <div className="">
      
      <Banner />
      <div className="contact">
        <Contacto />
      </div>
    </div>
  );
}

export default Contact;
