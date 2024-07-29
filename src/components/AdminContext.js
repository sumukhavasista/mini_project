// AdminContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAdmin(true);
    navigate('/add-vehicle');
  };

  const logout = () => {
    setIsAdmin(false);
    navigate('/');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
