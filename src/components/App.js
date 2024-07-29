import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VehicleForm from './VehicleForm';
import HomePage from './HomePage';
import ResultPage from './ResultPage';
import AdminLogin from './AdminLogin';
import CurrentAdminLogin from './CurrentAdminLogin'; // Create this component
import NewAdminLogin from './NewAdminLogin'; // Create this component
import { AdminProvider } from './AdminContext';

const App = () => {
  return (
    <AdminProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin-login">Admin Login</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            {/* Route for the HomePage with search option */}
            <Route path="/" element={<HomePage />} />

            {/* Route for displaying vehicle details based on vehicle number */}
            <Route path="/result/:vehicleNumber" element={<ResultPage />} />

            {/* Route for Admin Login */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Route for the Current Admin Login */}
            <Route path="/admin-login/current" element={<CurrentAdminLogin />} />

            {/* Route for the New Admin Login */}
            <Route path="/admin-login/new" element={<NewAdminLogin />} />

            {/* Route for the VehicleForm to add a new vehicle */}
            <Route path="/add-vehicle" element={<VehicleForm />} />
          </Routes>
        </div>
      </Router>
    </AdminProvider>
  );
};

export default App;
