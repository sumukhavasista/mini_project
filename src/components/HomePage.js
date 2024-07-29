import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/result/${vehicleNumber}`);
  };

  return (
    <div>
      <h1>Vehicle Search</h1>
      <input
        type="text"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HomePage;
