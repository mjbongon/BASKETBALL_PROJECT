import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './components/Home';
import Players from './components/Players';
import Teams from './components/Teams';
import Standings from './components/Standings';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {isLoggedIn && <Navbar />}
      <div className="content-wrap">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Profile" element={<Profile />} />
          <Route
            path="/"
            element={<LoginSignup onLogin={() => setLoggedIn(true)} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
