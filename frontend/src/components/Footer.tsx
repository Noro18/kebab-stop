import React from 'react';
import { Camera, Share2, Send } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="logo">
            KEBAB<span>STOP</span>
          </a>
          <p>Authentic Persian Flavors in Dili. Experience the taste of traditional recipes prepared with passion.</p>
          <div className="social-links">
            <a href="#" title="Instagram"><Camera size={20} /></a>
            <a href="#" title="Facebook"><Share2 size={20} /></a>
            <a href="#" title="Twitter"><Send size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#location">Find Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Newsletter</h3>
          <p>Subscribe for special offers and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kebab Stop Dili. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
