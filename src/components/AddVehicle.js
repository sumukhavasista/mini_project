import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from './AdminContext';
import './styles/AddVehicle.css';

const AddVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [model, setModel] = useState('');
  const [insurance, setInsurance] = useState('');
  const [brandName, setBrandName] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  const handleAddVehicle = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/vehicles/${vehicleNumber}`);
      if (response.data) {
        setMessage('Vehicle number already exists. Data is already present.');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const vehicle = { vehicleNumber, owner, model, insurance, brandName, engineCapacity, price };
        try {
          await axios.post('http://localhost:5000/vehicles', vehicle);
          setMessage('Vehicle added successfully!');
        } catch (postError) {
          console.error(postError);
          setMessage('Error submitting vehicle data. Please try again.');
        }
      } else {
        setMessage('Error checking vehicle number. Please try again.');
      }
    }
  };

  const handleDeleteVehicle = async (e) => {
    e.preventDefault();

    if (!window.confirm('Are you sure you want to delete this vehicle?')) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/vehicles/${vehicleNumber}`);
      setMessage('Vehicle deleted successfully!');
      setVehicleNumber('');
      setOwner('');
      setModel('');
      setInsurance('');
      setBrandName('');
      setEngineCapacity('');
      setPrice('');
    } catch (error) {
      console.error(error);
      setMessage('Error deleting vehicle. Please try again.');
    }
  };

  return (
    <div className="add-vehicle-container">
      <h1>{isDeleting ? 'Delete Vehicle' : 'Add Vehicle'}</h1>
      <form onSubmit={isDeleting ? handleDeleteVehicle : handleAddVehicle}>
        <div className="form-group">
          <label>Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Owner:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
            disabled={isDeleting}
          />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            disabled={isDeleting}
          />
        </div>
        <div className="form-group">
          <label>Insurance:</label>
          <input
            type="text"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            required
            disabled={isDeleting}
          />
        </div>
        <div className="form-group">
          <label>Brand Name:</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
            disabled={isDeleting}
          />
        </div>
        <div className="form-group">
          <label>Engine Capacity:</label>
          <input
            type="text"
            value={engineCapacity}
            onChange={(e) => setEngineCapacity(e.target.value)}
            required
            disabled={isDeleting}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            disabled={isDeleting}
          />
        </div>
        <button type="submit">{isDeleting ? 'Delete Vehicle' : 'Add Vehicle'}</button>
        <button
          type="button"
          onClick={() => setIsDeleting(!isDeleting)}
          style={{ marginLeft: '10px' }}
        >
          {isDeleting ? 'Switch to Add Vehicle' : 'Switch to Delete Vehicle'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddVehicle;
