import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css'; 

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setErrorMessage('');
    setSuccessMessage('');

    if (!username || !email || !password || !age || !mobileNumber) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Create the user data object
    const userData = {
      username,
      email,
      password,
      age: parseInt(age, 10),
      mobileNumber,
    };

    // Send the data to your server endpoint
    fetch('/your-server-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response
        setSuccessMessage('Signup successful!');
        // Optionally, redirect to another page
        window.location.href = '/login';
        history.push('/welcome'); // Adjust the route as needed
      })
      .catch((error) => {
        // Handle errors
        console.error('There was an error signing up!', error);
        setErrorMessage('An error occurred during signup. Please try again.');
      });
  };

  // Handler for the close button
  const handleClose = () => {
    history.push('/'); // Navigate to the homepage or desired route
  };

  return (
    <div className="sign-up">
      <button className="close-button" aria-label="Close" onClick={handleClose}>
        X
      </button>
      <h2 className="sign-up-title">Join Us</h2>
      <form className="form" onSubmit={handleSubmit}>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter a strong password"
            pattern=".{8,}"
            title="Password must be at least 8 characters long"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-input"
            min="0"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className="form-input"
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            title="Mobile number must be 10 digits"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>

        <button className="primary-button" id="button" type="submit">
          Sign Up
        </button>

        <p className="login-prompt">
          Already have an account?{' '}
          <Link to="/" className="login-link">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;