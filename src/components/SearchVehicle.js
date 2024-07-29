import React, { useState } from 'react';
import axios from 'axios';
import './styles/SearchVehicle.css';

const SearchVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/vehicles/${vehicleNumber}`);
      setVehicleDetails(response.data);
      setError(null);
    } catch (error) {
      setVehicleDetails(null);
      if (error.response && error.response.status === 404) {
        setError('Vehicle not found');
      } else {
        setError('Error fetching vehicle details');
      }
    }
  };

  return (
    <div>
      <div>
        <label>Vehicle Number:</label>
        <input
          type="text"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div>{error}</div>}
      {vehicleDetails && (
        <div>
          <h2>Vehicle Details</h2>
          <p>Vehicle Number: {vehicleDetails.vehicleNumber}</p>
          <p>Owner: {vehicleDetails.owner}</p>
          <p>Model: {vehicleDetails.model}</p>
          <p>Insurance: {vehicleDetails.insurance}</p>
        </div>
      )}
    </div>
  );
};

export default SearchVehicle;