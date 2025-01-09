import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

export default function Navbar({ showLinks = true, isLoggedIn }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      // Add your search functionality here
    }
  };

  return (
    <nav className="nav">
      {!isLoggedIn ? (
        <div className="site-title">HOOPS101</div>
      ) : (
        <Link to="/Home" className="site-title">
          HOOPS101
        </Link>
      )}
      {showLinks && (
        <>
          <ul className="nav-links">
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/Players">Players</CustomLink>
            <CustomLink to="/Teams">Teams</CustomLink>
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
            <Link to="/Profile" className="profile-icon">
              👤
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
