import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../assets/username-logo.svg'
import passLogo from  '../assets/password-logo.svg'
import '../styling/Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container" >
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <div className="username-password-container">
          <div className="user-div">
            <label className="username-label">
              <img className="user-logo" src={userLogo} alt="username-logo" />
              <input
                className="username-input"
                name="username"
                type="text"
                placeholder="Username..."
                value={username}
                onChange={handleChange}
                autoFocus
                />
            </label>
          </div>
          <div className="pass-div">
            <label className="password-label">
              <img className="pass-logo" src={passLogo} alt="password-logo" />
              <input
                className="password-input"
                name="password"
                type="password"
                placeholder="Password..."
                value={password}
                onChange={handleChange}
                />
            </label>
          </div>
        </div>
        <hr />
        <div className="login-register-buttons">
          <button className="login-btn">Login</button>
          <p>Don't have an account? Register here</p>
          <Link className="register-link" to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}