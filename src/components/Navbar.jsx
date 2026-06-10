function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 10%",
      background: "white"
    }}>
      <h2>Edulenza</h2>

      <div style={{
        display: "flex",
        gap: "20px"
      }}>
        <span>Courses</span>
        <span>Schools</span>
        <span>Pricing</span>
        <span>About</span>
      </div>
    </nav>
  );
}

export default Navbar;