import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home1 from "./components/Home1";
import Dashboard from "./components/Dashboard";
import PetHostel from './components/PetHostel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isAuthenticated = !!localStorage.getItem('access');

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hostels/:districtId" element={<PetHostel />} />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
