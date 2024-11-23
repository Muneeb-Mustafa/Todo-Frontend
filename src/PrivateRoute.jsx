import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { token } = useAuthContext();

  return token ? element : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;


