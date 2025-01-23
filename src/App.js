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
import TeamDetail from './components/TeamDetail'; // Import the TeamDetail component
import PlayerDetail from './components/PlayerDetail';
import './App.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} />}
      <div className="content-wrap">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Players" element={<Players />} /> {/* For player details */}
          <Route path="/Players/:playerName" element={PlayerDetail} />
          <Route path="/Players/:id" element={PlayerDetail} />
          <Route path="/Teams" element={<Teams />} /> {/* For team details */}
          <Route path="/Teams/:id" element={<TeamDetail />} />
          <Route path="/Teams/:teamName" element={<TeamDetail />} />
          <Route path="/Standings" element={<Standings />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<LoginSignup onLogin={() => setLoggedIn(true)} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;