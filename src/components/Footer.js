
import '../styles/Footer.css';

import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">🌴 TRAVELER</h2>
          <p>
            Urna ratione ante harum provident, eleifend, vulputate molestie proin fringilla,
            praesentium magna conubia at perferendis, pretium, aenean aut ultrices.
          </p>
        </div>

        <div className="footer-section">
          <h3>RECENT POST</h3>
          <div className="footer-post">
            <div className="post-thumbnail">100x100</div>
            <div className="post-info">
              <p className="post-title">BEST JOURNEY TO PEACEFUL PLACES</p>
              <span className="post-date">February 17, 2022</span>
            </div>
          </div>
          <div className="footer-post">
            <div className="post-thumbnail">100x100</div>
            <div className="post-info">
              <p className="post-title">TRAVEL WITH FRIENDS IS BEST</p>
              <span className="post-date">February 17, 2022</span>
            </div>
          </div>
        </div>


        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Feel free to contact and reach us !!</p>
          <p>📞 +01(988) 256 203</p>
          <p>📧 info@domain.com</p>
          <p>📍 3146 Koontz, California</p>
        </div>


        <div className="footer-section">
          <h3>GALLERY</h3>
          <div className="gallery">
            <div className="gallery-item">100x100</div>
            <div className="gallery-item">100x100</div>
            <div className="gallery-item">100x100</div>
            <div className="gallery-item">100x100</div>
            <div className="gallery-item">100x100</div>
            <div className="gallery-item">100x100</div>
          </div>
        </div>
      </div>


      <div className="footer-subscribe">
        <p>Subscribe our newsletter for more update & news !!</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter Your Email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

  
      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Term & Condition</a> | <a href="#">FAQ</a>
        </div>
        <p>Copyright © 2024 Traveler. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
