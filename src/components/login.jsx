import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; 

function Login(props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { onClose, onLogin } = props; 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/home');
    const userData = {
      username: username,
      password: password,
    };
    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login successful:', data);
        
        if (onLogin) {
          onLogin(data);
        }

       
 
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
      
  };

  return (
    <div className="sign-in">
      <button className="close-button" aria-label="Close" onClick={onClose}>
        {/* You can add an icon or text for the close button */}
        &times;
      </button>
      <h2 className="sign-in-title">Sign In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
        </div>
        <button type="submit" id="button" className="primary-button">Sign In</button>
      </form>
      <div className="join-container">
        <span>Not assigned, </span>
        <a href="signup"><b className="join-us">Join Us</b></a>
      </div>
    </div>
  );
}

export default Login;