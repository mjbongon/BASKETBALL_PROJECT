import React, { useEffect, useState } from "react";
import "./Profile.css";
import Navbar from "../Navbar";
import {
  getAuth,
  onAuthStateChanged,
  updatePassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const Profile = () => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to toggle the modal
  const [selectedImage, setSelectedImage] = useState(null);  // Store the selected image
  const [imagePreview, setImagePreview] = useState(null);  // Store the image preview
  const [errorMessage, setErrorMessage] = useState("");  // Store any error message
  const navigate = useNavigate();  // Initialize the navigate function

  // Retrieve the stored image from local storage if it exists
  useEffect(() => {
    const storedImage = localStorage.getItem("profilePhoto");
    if (storedImage) {
      setImagePreview(storedImage);
    }

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

  // Function to handle password change
  const handleChangePassword = async () => {
    if (!user || !newPassword) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await updatePassword(user, newPassword);
      alert("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password. Please try again.");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Logged out successfully.");
        navigate("/");  // Navigate to the login/signup page after logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        alert("Error logging out. Please try again.");
      });
  };

  // Function to open the modal
  const openPhotoModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closePhotoModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");  // Reset error message
    // Clear the selected image if canceled
    setSelectedImage(null);
    setImagePreview(localStorage.getItem("profilePhoto"));  // Keep the previous stored photo
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("The file is too large. Please select a file less than 5MB.");
        setImagePreview(null);  // Clear the preview if file is too large
      } else {
        setErrorMessage("");  // Clear any previous error
        setSelectedImage(file);
        setImagePreview(URL.createObjectURL(file));  // Preview the image
      }
    }
  };

  // Handle removing the current photo
  const handleRemovePhoto = () => {
    setSelectedImage(null);
    setImagePreview(null);
    localStorage.removeItem("profilePhoto"); // Remove photo from local storage
  };

  // Function to upload the photo
  const handleUploadPhoto = () => {
    if (!selectedImage) return;

    // Simulate photo upload and save to local storage
    console.log("Uploading photo:", selectedImage);
    localStorage.setItem("profilePhoto", imagePreview);  // Save the photo URL in local storage

    // Close the modal after uploading
    closePhotoModal();
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile-header">
            {/* Profile Icon and User Info */}
            <div className="profile-icon" onClick={openPhotoModal}>
              {user?.photoURL || imagePreview ? (
                <img
                  src={imagePreview || user.photoURL}
                  alt="User Avatar"
                  className="profile-avatar"
                />
              ) : (
                <span className="profile-icon-text">👤</span> // Default icon
              )}
            </div>
            <div className="profile-info-text">
              <p><strong>{user?.displayName || "No Name"}</strong></p>
              <p>{user?.email}</p>
            </div>
          </div>

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
            <div className="button-group">
              <button onClick={handleChangePassword}>Change Password</button>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Change Modal */}
      {isModalOpen && (
        <div className="photo-change-box">
          <div className="photo-change-content">
            <h3>Change Profile Photo</h3>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="photo-options">
              <button onClick={() => document.getElementById("photoUpload").click()}>
                Upload Photo
              </button>
              {imagePreview && (
                <button onClick={handleRemovePhoto}>Remove Current Photo</button>
              )}
              <button onClick={closePhotoModal} className="cancel-button">Cancel</button>
            </div>
            <input
              type="file"
              id="photoUpload"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" className="preview-img" />
              </div>
            )}
            {selectedImage && (
              <button onClick={handleUploadPhoto} className="upload-button">
                Confirm
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
