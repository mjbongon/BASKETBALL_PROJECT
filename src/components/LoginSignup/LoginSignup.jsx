import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebaseConfig'; // Ensure this path is correct
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './LoginSignup.css';
import Home from '../Home'; // Import your Home component
import Navbar from '../../Navbar'; // Import your Navbar component

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Log in');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [action]);

  const handleLoginSignup = async () => {
    setError('');
    try {
      if (action === 'Sign Up') {
        if (name && email && password) {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(userCredential.user, { displayName: name });
          setLoggedIn(true);
        } else {
          setError('Please enter name, email, and password.');
        }
      } else {
        if (email && password) {
          await signInWithEmailAndPassword(auth, email, password);
          setLoggedIn(true);
        } else {
          setError('Please enter both email and password.');
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <div className="login-signup-container">
          <Navbar showLinks={false} isLoggedIn={isLoggedIn} />
          <div className="content">
            <div className="left-side">
              <h1>Welcome to HOOPS101</h1>
              <p>Your ultimate basketball community platform.</p>
            </div>
            <div className="right-side">
              <div className="form-container">
                <div className="header">
                  <div className="text">{action}</div>
                  <div className="underline"></div>
                </div>
                <div className="inputs">
                  {action === 'Sign Up' && (
                    <div className="input">
                      <img src={user_icon} alt="User icon" />
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="input">
                    <img src={email_icon} alt="Email icon" />
                    <input
                      type="email"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <img src={password_icon} alt="Password icon" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div className="error-message">{error}</div>}
                </div>
                
                <div className="submit-container">
                  <div
                    className="submit"
                    onClick={() => handleLoginSignup()}
                  >
                    Continue
                  </div>
                  <br></br>
                  {action === 'Log in' ? (
                    <div className="switch-action">
                      Don't have an account yet? <span onClick={() => setAction('Sign Up')}>Register here</span>
                    </div>
                  ) : (
                    <div className="switch-action">
                      Already have an account? <span onClick={() => setAction('Log in')}>Log in here</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );  
};

export default LoginSignup; 
