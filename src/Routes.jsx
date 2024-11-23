import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontend from './pages/Frontend';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';   
import ProtectedRoute from './PrivateRoute';

const Index = () => {
  return (
    <Routes>
      <Route path='/*' element={<Frontend />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route 
        path='/dashboard/*' 
        element={<ProtectedRoute element={<Dashboard />} />} 
      />
    </Routes>
  );
};

export default Index;
