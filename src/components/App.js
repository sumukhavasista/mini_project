import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import CurrentAdminLogin from './CurrentAdminLogin';
import NewAdminLogin from './NewAdminLogin';
import ResultPage from './ResultPage';
import AddVehicle from './AddVehicle';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-login/current" element={<CurrentAdminLogin />} />
          <Route path="/admin-login/new" element={<NewAdminLogin />} />
          <Route path="/result/:vehicleNumber" element={<ResultPage />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
