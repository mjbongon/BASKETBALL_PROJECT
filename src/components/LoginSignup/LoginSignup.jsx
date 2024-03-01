import React, { useState, useEffect } from 'react';
import './LoginSignup.css';
import Home from '../Home'; // Import your Home component

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Log in');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showLostPassword, setShowLostPassword] = useState(action === 'Log in');

  useEffect(() => {
    setShowLostPassword(action === 'Log in');
  }, [action]);

  const handleLoginSignup = () => {
    if (action === 'Sign Up') {
      // Check if both name and email are entered before proceeding
      if (name && email && password) {
        // Perform your signup logic here
        // For simplicity, let's assume signup is successful

        // Update the login state to true
        setLoggedIn(true);
      } else {
        alert('Please enter name, email, and password.');
      }
    } else {
      // If Login is clicked, update the state
      if (email && password) {
        // Perform your login logic here
        // For simplicity, let's assume login is successful

        // Update the login state to true
        setLoggedIn(true);
      } else {
        alert('Please enter both email and password.');
      }
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === 'Sign Up' && (
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {showLostPassword && (
              <div className="forgot-password">
                <span>Lost Password? Click here</span>
              </div>
            )}
          </div>
          <div className="submit-container">
            <div
              className={action === 'Log in' ? 'submit right' : 'submit gray right'}
              onClick={() => handleLoginSignup()}
            >
              Continue
            </div>
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => {
                setAction('Sign Up');
              }}
            >
              Sign up
            </div>
            <div
              className={action === 'Sign Up' ? 'submit gray' : 'submit'}
              onClick={() => {
                setAction('Login');
              }}
            >
              Log in
            </div>
          </div>
        </div>
      )}
    </>
  );  
};

export default LoginSignup;