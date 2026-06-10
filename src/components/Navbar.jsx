import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Edulenza</h2>

      <ul className="nav-links">
        <li>Platform</li>
        <li>Courses</li>
        <li>For Schools</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>

      <div className="auth-buttons">
        <button>Sign In</button>
        <button>Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;