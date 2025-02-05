import React from "react";
import "../styles/Contact.css";

import Contacto from "../components/Contact/ContactoFrom.js";
import Banner from "../components/Contact/Banner.js";
import FAQ from '../components/Contact/FAQ.js';
function Contact() {
  return (
    <div className="">
      
      <Banner />
      <div className="contact">
        <Contacto />
        <FAQ />
      </div>
    </div>
  );
}

export default Contact;
