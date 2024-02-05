import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./styles.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/Home" className="site-title">
        HOOPS101
      </Link>
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/Players">Players</CustomLink>
        <CustomLink to="/Teams">Teams</CustomLink>
        <CustomLink to="/Standings">Standings</CustomLink>
        <CustomLink to="/Profile">Profile</CustomLink>

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}