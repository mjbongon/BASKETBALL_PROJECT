export default function Navbar() {
    return (
     <nav className="nav">
        <a href="/" className="site-title">HOOPS101</a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li className="active">
                <a href="/teams">Teams</a>
            </li>
            <li>
                <a href="/players">Players</a>
            </li>
            <li>
                <a href="/standings">Standings</a>
            </li>
        </ul>
    </nav>
    )
}