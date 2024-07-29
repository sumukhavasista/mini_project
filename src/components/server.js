const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/vehicleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

// Define the Vehicle Schema
const vehicleSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true, unique: true },
  owner: { type: String, required: true },
  model: { type: String, required: true },
  insurance: { type: String, required: true },
  brandName: { type: String, required: true },
  engineCapacity: { type: String, required: true },
  price: { type: Number, required: true },
});

// Create the Vehicle Model and specify the collection name 'vehicles'
const Vehicle = mongoose.model('Vehicle', vehicleSchema, 'vehicles');

// Routes

// Route to insert a new vehicle
app.post('/vehicles', async (req, res) => {
  const { vehicleNumber, owner, model, insurance, brandName, engineCapacity, price } = req.body;
  const vehicle = new Vehicle({ vehicleNumber, owner, model, insurance, brandName, engineCapacity, price });
  try {
    await vehicle.save();
    res.status(201).send(vehicle);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route to fetch a vehicle by its number
app.get('/vehicles/:vehicleNumber', async (req, res) => {
  console.log('Received request for vehicle:', req.params.vehicleNumber);
  try {
    const vehicle = await Vehicle.findOne({ vehicleNumber: req.params.vehicleNumber });
    if (!vehicle) return res.status(404).send('Vehicle not found');
    res.send(vehicle);
  } catch (err) {
    console.error('Error fetching vehicle:', err);
    res.status(500).send(err);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));