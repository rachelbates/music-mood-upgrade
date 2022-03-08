
const Header = () => {
  return (
    <> <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand pl-2" href="/">Music Mood Journal</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/journal">Create Entry</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/genre">Update Genres</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  </>
  )
}

export default Header