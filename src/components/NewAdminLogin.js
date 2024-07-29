import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewAdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('Pending'); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    alert('New admin registered successfully.');
    navigate('/admin-login'); 
  };

  return (
    <div>
      <h1>New Admin Registration</h1>
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
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State Code:</label>
          <input
            type="text"
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Registration Status:</label>
          <select
            value={registrationStatus}
            onChange={(e) => setRegistrationStatus(e.target.value)}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default NewAdminLogin;
