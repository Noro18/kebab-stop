import React from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

import kebabImg from '../assets/imgs/Kebab.jpg';
import sausageImg from '../assets/imgs/Sausage.jpg';
import friesImg from '../assets/imgs/Fries.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Classic Persian Kebab',
    price: '$12.00',
    description: 'Traditionally marinated lamb grilled to perfection, served with saffron rice.',
    image: kebabImg,
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: 'Grilled Persian Sausage',
    price: '$10.50',
    description: 'Spicy and savory sausages with authentic Middle Eastern herbs.',
    image: sausageImg,
    tag: 'Chef Special'
  },
  {
    id: 3,
    name: 'Golden Persian Fries',
    price: '$4.50',
    description: 'Crispy hand-cut potatoes tossed in our secret spice blend.',
    image: friesImg,
    tag: 'Classic'
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="menu">
      <div className="section-header">
        <span className="subtitle">From the Grill</span>
        <h2>FEATURED <span>DISHES</span></h2>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <motion.div 
            key={item.id}
            className="menu-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-image">
              <img src={item.image} alt={item.name} />
              {item.tag && <span className="card-tag">{item.tag}</span>}
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="order-btn">Add to Order</button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="menu-footer">
        <a href="#" className="btn-secondary">Download Full Menu (PDF)</a>
      </div>
    </section>
  );
};

export default Menu;
