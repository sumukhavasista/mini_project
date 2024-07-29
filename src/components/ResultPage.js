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

  const handleAddVehicle = () => {
    navigate('/add-vehicle');
  };

  return (
    <div>
      {error && (
        <div>
          <div>{error}</div>
          <button onClick={handleAddVehicle}>Insert Vehicle</button>
        </div>
      )}
      {vehicleDetails && (
        <div>
          <h2>Vehicle Details</h2>
          <p>Vehicle Number: {vehicleDetails.vehicleNumber}</p>
          <p>Owner: {vehicleDetails.owner}</p>
          <p>Model: {vehicleDetails.model}</p>
          <p>Insurance: {vehicleDetails.insurance}</p>
          <p>Brand Name: {vehicleDetails.brandName}</p>
          <p>Engine Capacity: {vehicleDetails.engineCapacity}</p>
          <p>Price: ${vehicleDetails.price}</p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
