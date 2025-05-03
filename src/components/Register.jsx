import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '1rem' }}>
        <div className="text-center mb-4">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/040/167/033/small/ai-generated-puppy-and-kitten-lying-together-love-adorable-cute-animal-friendship-care-cat-dog-hug-pet-photo.jpg" style={{ width: '180px', height: '180px', objectFit: 'contain' }} />
          <h2 className="mt-3">Create Account</h2>
        </div>
        <form onSubmit={handleRegister}>
          <input type="text" className="form-control mb-3" placeholder="Username" name="username" onChange={handleChange} required />
          <input type="email" className="form-control mb-3" placeholder="Email" name="email" onChange={handleChange} required />
          <input type="password" className="form-control mb-3" placeholder="Password" name="password" onChange={handleChange} required />
          <input type="password" className="form-control mb-3" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
          <button className="btn btn-primary w-100 mt-2" type="submit">Register</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-primary">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
