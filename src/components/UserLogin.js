import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/UserLogin.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/vehicles/${vehicleNumber}`);
      if (response.data && response.data.owner === username) {
        navigate(`/result/${vehicleNumber}`);
      } else {
        setError('Invalid username or vehicle number');
      }
    } catch (error) {
      setError('Vehicle not found');
    }
  };

  return (
    <div className="user-login">
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UserLogin;
