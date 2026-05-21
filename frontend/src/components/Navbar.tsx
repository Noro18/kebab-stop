import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          KEBAB<span>STOP</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Find Us</a>
          <a href="https://wa.me/your-number" className="cta-mobile">Order Now</a>
        </div>

        <div className="nav-actions">
          <a href="https://wa.me/your-number" className="cta-desktop">Order Now</a>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
