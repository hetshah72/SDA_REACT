import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="header">
      <div className="header-container">
        <Link className="logo" to="/">Shipment Tracker</Link>
        <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/new-shipment">New Shipment</Link>
          <Link className="nav-link" to="/track-shipment">Track Shipment</Link>
          {user ? (
            <>
              <span className="user-greeting">Hello, {user.email}</span>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
