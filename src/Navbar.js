import React, { useState } from "react";
import "./css.css";

function Navbar() {
  const styles = {
    navbar: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px",
    },
  };
  // Initialize the active section state to "Home" (or any default section)
  const [activeSection, setActiveSection] = useState("Home");

  // Function to handle navigation item clicks
  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-style" style={styles.navbar}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#Navbar">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={`nav-link ${activeSection === "Home" ? "active" : ""}`}
              href="#Home"
              onClick={() => handleNavItemClick("Home")}
            >
              Home
            </a>
            <a
              className={`nav-link ${
                activeSection === "AboutMe" ? "active" : ""
              }`}
              href="#AboutMe"
              onClick={() => handleNavItemClick("AboutMe")}
            >
              About Me
            </a>
            <a
              className={`nav-link ${
                activeSection === "Portfolio" ? "active" : ""
              }`}
              href="#Portfolio"
              onClick={() => handleNavItemClick("Portfolio")}
            >
              Portfolio
            </a>
            <a
              className={`nav-link ${
                activeSection === "Resume" ? "active" : ""
              }`}
              href="#Resume"
              onClick={() => handleNavItemClick("Resume")}
            >
              Resume
            </a>
            <a
              className={`nav-link ${
                activeSection === "ContactMe" ? "active" : ""
              }`}
              href="#ContactMe"
              onClick={() => handleNavItemClick("ContactMe")}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
