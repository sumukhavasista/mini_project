import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">KNOW YOUR VEHICLE</h1>
        <div className="login-buttons">
          <Link to="/user-login">
            <button>User Login</button>
          </Link>
          <Link to="/admin-login">
            <button>Admin Login</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
