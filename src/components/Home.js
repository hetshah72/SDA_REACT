import React from 'react';
import shipmentImage from '../your-image.jpg' ;

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Shipment Delivery App</h2>
      <p>Track and manage your shipments easily.</p>
      <img src={shipmentImage} alt="Shipment Management" className="home-image" />
    </div>
  );
};

export default Home;
