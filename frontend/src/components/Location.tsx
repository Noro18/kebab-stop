import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import './Location.css';

const Location: React.FC = () => {
  return (
    <section id="location" className="location">
      <div className="location-container">
        <motion.div 
          className="location-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Find Us</span>
          <h2>VISIT THE <span>SHOP</span></h2>
          
          <div className="info-cards">
            <div className="info-item">
              <MapPin className="icon" size={24} />
              <div>
                <h3>Address</h3>
                <p>Kampung Baru Dili, Timor-Leste</p>
              </div>
            </div>
            
            <div className="info-item">
              <Clock className="icon" size={24} />
              <div>
                <h3>Opening Hours</h3>
                <p>Mon - Sat: 10:00 AM - 10:00 PM</p>
                <p>Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="icon" size={24} />
              <div>
                <h3>Contact</h3>
                <p>+670 XXXX XXXX</p>
                <a href="https://wa.me/your-number" className="wa-link">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="location-map"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map Placeholder */}
          <div className="map-placeholder">
            <MapPin size={48} color="var(--color-orange)" />
            <p>Interactive Map Loading...</p>
            <div className="map-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
