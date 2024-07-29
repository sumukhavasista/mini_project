import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/AdminLogin.css';

const AdminLogin = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleLoginOptions = () => {
    setShowLoginOptions(true);
  };

  return (
    <div className="admin-login">
      {!showLoginOptions ? (
        <div>
          <h1>Admin Login</h1>
          <button onClick={handleLoginOptions}>Admin Login Options</button>
        </div>
      ) : (
        <div>
          <h2>Choose Admin Login Option</h2>
          <button>
            <Link to="/admin-login/current">Current Admin Login</Link>
          </button>
          <button>
            <Link to="/admin-login/new">New Admin Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
