import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

export default function Navbar({ showLinks = true, isLoggedIn }) {
  console.log("Navbar is rendering");
  console.log(isLoggedIn); // Log to verify if isLoggedIn is true

  const [searchQuery, setSearchQuery] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null); // State to store the profile photo

  useEffect(() => {
    // Fetch the profile photo from localStorage if it exists
    const storedPhoto = localStorage.getItem("profilePhoto");
    if (storedPhoto) {
      setProfilePhoto(storedPhoto);
    }
  }, []); // Only run this once when the component is mounted

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav className="nav">
      {/* Render the website name as a clickable link when logged in, otherwise just plain text */}
      {isLoggedIn ? (
        <Link to="/Home" className="site-title">
          HOOPS101
        </Link>
      ) : (
        <div className="site-title">HOOPS101</div>
      )}

      {showLinks && (
        <>
          <ul className="nav-links">
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/Players">Players</CustomLink>
            <CustomLink to="/Teams">Teams</CustomLink>
            <CustomLink to="/Standings">Standings</CustomLink>
          </ul>
          <div className="nav-right">
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                🔍
              </button>
            </form>
            {/* Profile icon in Navbar */}
            <Link to="/Profile" className="profile-icon">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile Avatar"
                  className="navbar-profile-avatar"
                />
              ) : (
                <span className="profile-icon-text">👤</span> // Default icon
              )}
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
