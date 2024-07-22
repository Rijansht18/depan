import React, { useState } from 'react';
import '../login/Login.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../login/Register';

function Login() {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = (event) => {
    event.preventDefault();

    const { name, password } = formData;
    if (name.trim() === '' || password.trim() === '') {
      alert('All fields are required');
      return false;
    }

    if (name.length < 3) {
      alert('Username must be at least 3 characters long');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false;
    }

    navigate('/');
  };

  return (
    <>
      <div className="container my-5">
        <div className="logincard">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 border rounded-2 wrapper">
              <form onSubmit={validateForm}>
                <h2>Login</h2>
                <div className="input-box">
                  <input
                    type="text"
                    id="name"
                    placeholder="Username"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="remember-forgot">
                  <label htmlFor="remember">
                    <input type="checkbox" id="remember" /> Remember me
                  </label>
                  <Link to="#">Forget password?</Link>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
                <div className="register-link">
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Login;