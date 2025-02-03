import React from "react";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import '../../styles/Footer/SocialMedia.css'; 

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <h3 className="social-media-title">¡SÍGUENOS!</h3>
      <div className="icons-container">
        <a href="#" className="icon-link"><Facebook size={30} /></a>
        <a href="#" className="icon-link"><Instagram size={30} /></a>
        <a href="#" className="icon-link"><Youtube size={30} /></a>
        <a href="#" className="icon-link"><MessageCircle size={30} /></a>
      </div>
    </div>
  );
};

export default SocialMedia;