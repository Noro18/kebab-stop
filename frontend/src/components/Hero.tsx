import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/imgs/Kebab2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      
      <div className="hero-content">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          AUTHENTIC PERSIAN FLAVORS <br />
          <span>IN THE HEART OF DILI</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the finest grilled kebabs and traditional recipes 
          prepared with passion and imported spices.
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#menu" className="btn-primary">
            View Our Menu <ArrowRight size={20} />
          </a>
          <a href="#location" className="btn-secondary">
            Visit Us Today
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-badge"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="badge-inner">
          <span>Freshly</span>
          <strong>GRILLED</strong>
          <span>Daily</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
