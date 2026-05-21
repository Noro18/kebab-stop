import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutImg from '../assets/imgs/Logo.png'; // Using logo as a placeholder or atmosphere shot

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <motion.div 
          className="about-image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-logo-frame">
            <img src={aboutImg} alt="Kebab Stop logo" />
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Our Story</span>
          <h2>A TASTE OF PERSIA <br /><span>IN DILI</span></h2>
          <p>
            Kebab Stop is Dili's premier destination for authentic Persian cuisine. 
            Born from a passion for traditional recipes and high-quality ingredients, 
            we bring the rich flavors of the Middle East to the heart of Timor-Leste.
          </p>
          <div className="quote-box">
            <p>"High quality ingredients which you can taste in every bite. It was fresh, authentic and YES t'was 'A taste of Persia' indeed!"</p>
            <span>— Satisfied Customer</span>
          </div>
          <p>
            Our master chef ensures every kebab is grilled to perfection over an open flame, 
            using spices imported directly to maintain the true Persian essence. 
            From our friendly staff to our cozy atmosphere, we invite you to an 
            unforgettable dining experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
