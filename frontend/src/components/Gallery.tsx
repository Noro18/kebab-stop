import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

import shot1 from '../assets/imgs/Screenshot_2026-05-21-19-18-22-11_3d9111e2d3171bf4882369f490c087b4.jpg';
import shot2 from '../assets/imgs/Screenshot_2026-05-21-19-18-25-73_3d9111e2d3171bf4882369f490c087b4.jpg';
import food1 from '../assets/imgs/Kebab.jpg';
import food2 from '../assets/imgs/Sausage.jpg';
import food3 from '../assets/imgs/Kebab2.jpg';
import food4 from '../assets/imgs/Fries.jpg';

const images = [
  { src: shot1, alt: 'Kebab Stop Shop Front', size: 'large' },
  { src: food1, alt: 'Grilled Kebab', size: 'small' },
  { src: food2, alt: 'Persian Sausage', size: 'small' },
  { src: food3, alt: 'Grill Session', size: 'medium' },
  { src: shot2, alt: 'Kebab Stop Interior', size: 'medium' },
  { src: food4, alt: 'Side Dishes', size: 'small' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="section-header">
        <span className="subtitle">Visual Journey</span>
        <h2>OUR <span>GALLERY</span></h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            className={`gallery-item ${img.size}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={img.src} alt={img.alt} />
            <div className="gallery-hover">
              <span>{img.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
