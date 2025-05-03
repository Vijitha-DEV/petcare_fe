import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });
      localStorage.setItem('access', res.data.access);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '1rem' }}>
        <div className="text-center mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XHgm1m_tf28zYVEmfrqQIOqb02eDFZWEHg&s" alt="Pet Care Login" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
          <h2 className="mt-3">Welcome Back!</h2>
        </div>
        <form onSubmit={handleLogin}>
          <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn btn-success w-100 mt-2" type="submit">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register" className="text-primary">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
