// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../Navbar';
import { getAuth, onAuthStateChanged, updatePassword, signOut } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChangePassword = async () => {
    if (!user || !newPassword) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      await updatePassword(user, newPassword);
      alert('Password changed successfully.');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Logged out successfully.');
    }).catch((error) => {
      console.error('Error logging out:', error);
      alert('Error logging out. Please try again.');
    });
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-box">
          <h2 className="profile-header">Profile</h2>
          <div className="profile-info">
            {user ? (
              <>
                <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <div className="change-password">
                  <h3>Change Password</h3>
                  <div className="password-fields">
                    <div>
                      <label htmlFor="newPassword">New Password:</label>
                      <input 
                        type="password" 
                        id="newPassword" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                      />
                    </div>
                  </div>
                  <button onClick={handleChangePassword}>Change Password</button> 
                  <button onClick={handleLogout} style={{ marginLeft: '45px' }}>Logout</button> {/* Ajuste de estilo */}
                </div>
              </>
            ) : (
              <p>Please log in to view your profile information.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
