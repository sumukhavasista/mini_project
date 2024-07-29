import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/ResultPage.css';

const ResultPage = () => {
  const { vehicleNumber } = useParams();
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/vehicles/${vehicleNumber}`);
        setVehicleDetails(response.data);
        setError(null);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Vehicle not found');
        } else {
          setError('Error fetching vehicle details');
        }
      }
    };

    fetchVehicle();
  }, [vehicleNumber]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="result-page">
      <h1>Vehicle Details</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : vehicleDetails ? (
        <div className="vehicle-details">
          <p><strong>Owner:</strong> {vehicleDetails.owner}</p>
          <p><strong>Model:</strong> {vehicleDetails.model}</p>
          <p><strong>Year:</strong> {vehicleDetails.year}</p>
          <p><strong>Color:</strong> {vehicleDetails.color}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default ResultPage;
