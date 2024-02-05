import React from 'react';
import './Home.css';
import Navbar from '../Navbar'; // Adjust the path based on your project structure

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      {/* Rest of your Home page content */}
      <h1>Welcome to the Home Page!</h1>
      {/* Additional content goes here */}
    </div>
  );
};

export default Home;
