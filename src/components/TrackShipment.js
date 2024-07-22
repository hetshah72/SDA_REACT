import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const NewShipment = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [packageSize, setPackageSize] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'shipments'), {
        sender,
        receiver,
        packageSize,
        deliveryAddress,
        status: 'Pending',
        createdAt: new Date()
      });
      setMessage('Shipment created successfully!');
      setSender('');
      setReceiver('');
      setPackageSize('');
      setDeliveryAddress('');
    } catch (error) {
      setMessage(`Error creating shipment: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>New Shipment</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Sender</label>
          <input
            type="text"
            className="form-control"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Receiver</label>
          <input
            type="text"
            className="form-control"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Package Size</label>
          <input
            type="text"
            className="form-control"
            value={packageSize}
            onChange={(e) => setPackageSize(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Delivery Address</label>
          <input
            type="text"
            className="form-control"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create Shipment</button>
      </form>
    </div>
  );
};

export default NewShipment;
