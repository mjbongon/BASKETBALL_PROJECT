import React, { useState, useEffect } from "react";
import { Link, useNavigate, useMatch } from "react-router-dom"; // Add useResolvedPath and useMatch
import "./styles.css";

export default function Navbar({ showLinks = true, isLoggedIn, setSearchQuery }) {
  console.log("Navbar is rendering");
  console.log(isLoggedIn);

  const [searchQuery, setLocalSearchQuery] = useState(""); // Local state for search input
  const [profilePhoto, setProfilePhoto] = useState(null); // Profile photo state
  const navigate = useNavigate(); // To programmatically navigate to team/player pages

  useEffect(() => {
    // Fetch profile photo from localStorage if it exists
    const storedPhoto = localStorage.getItem('profilePhoto');
    if (storedPhoto) {
      setProfilePhoto(storedPhoto);
    }
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    // Normalize the search query to lower case for easier matching
    const query = searchQuery.toLowerCase();

    // Check if the query matches a team or player and navigate accordingly
    if (checkIfTeam(query)) {
        // If it's a team (team name or city), navigate to the team's page
        navigate(`/Teams/${query}`);
    } else {
        // If it's a player (first or last name), navigate to the player's page
        navigate(`/Players/${query}`);
    }
  };

  const checkIfTeam = (query) => {
    // List of team data (you can fetch this from an API if necessary)
    const teams = [
        { name: 'Boston Celtics', city: 'Boston' },
        { name: 'Atlanta Hawks', city: 'Atlanta' },
        { name: 'Los Angeles Lakers', city: 'Los Angeles' },
        { name: 'Miami Heat', city: 'Miami' },
        { name: 'Chicago Bulls', city: 'Chicago' },
        // Add more teams here...
    ];

    // Check if the query matches any part of the team name or city
    return teams.some((team) => {
        const teamNameMatch = team.name.toLowerCase().includes(query);
        const teamCityMatch = team.city.toLowerCase().includes(query);
        return teamNameMatch || teamCityMatch;
    });
  };

  return (
    <nav className="nav">
      {isLoggedIn ? (
        <Link to="/Home" className="site-title">HOOPS101</Link>
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
                onChange={(e) => setLocalSearchQuery(e.target.value)} // Update local search state
                className="search-input"
              />
              <button type="submit" className="search-button">🔍</button>
            </form>
            <Link to="/Profile" className="profile-icon">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile Avatar" className="navbar-profile-avatar" />
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
  const isActive = useMatch({ path: to, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}