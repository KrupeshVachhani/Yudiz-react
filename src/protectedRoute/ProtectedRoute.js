// src/components/ProtectedRoute/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProtectedRoute = ({ children }) => {

  const { isAuthenticated } = useSelector(state => state.auth);

  if (!isAuthenticated) {

    return <Navigate to="/login" />;
  }

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};