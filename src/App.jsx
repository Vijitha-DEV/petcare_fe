import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

import Home1 from "./components/Home1";
import Dashboard from "./components/Dashboard";
import PetHostel from "./components/PetHostel";
import Hospitals from "./components/Hospitals";
import Grooming from "./components/Grooming";
import Supplies from "./components/Supplies";
import Hospital1 from "./components/Hospital1";
import Payment from "./components/Payment";

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
        <Route path="/hospital1" element={<Hospital1 />} />
        <Route path="/hostel/:districtId" element={<PetHostel />} />
        <Route path="/hospital/:districtId" element={<Hospitals />} />
        <Route path="/grooming/:districtId" element={<Grooming />} />
        <Route path="/supplies/:districtId" element={<Supplies />} />
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
