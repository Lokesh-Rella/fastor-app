import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Otp from './pages/Otp';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/detail/:id" element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
