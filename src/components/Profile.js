import React from 'react';
import './Profile.css';
import Navbar from '../Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-box">
          <h2 className="profile-header">Profile</h2>
          <div className="profile-info">
            <p><strong>Name:</strong> UserTest</p>
            <p><strong>Email:</strong> usertest@prateducacio.com</p>
            <div className="change-password">
              <h3>Change Password</h3>
              <div className="password-fields">
                <div>
                  <label htmlFor="oldPassword">Old Password:</label>
                  <input type="password" id="oldPassword" />
                </div>
                <div>
                  <label htmlFor="newPassword">New Password:</label>
                  <input type="password" id="newPassword" />
                </div>
              </div>
              <button>Change Password</button> <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
