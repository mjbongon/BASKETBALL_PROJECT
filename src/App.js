import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './components/Home';
import Players from './components/Players';
import Teams from './components/Teams';
import Standings from './components/Standings';
import Profile from './components/Profile';
import Navbar from './Navbar';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Standings" element={<Standings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route
          path="/"
          element={<LoginSignup onLogin={() => setLoggedIn(true)} />}
        />
      </Routes>
    </>
  );
};

export default App;