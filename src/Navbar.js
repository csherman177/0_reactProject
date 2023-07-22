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
  const [activeSection, setActiveSection] = useState("Home");

  // Function to handle navigation item clicks
  const handleNavItemClick = (section) => {
    setActiveSection(section);

    // Get the DOM element of the section to scroll to
    const targetSection = document.getElementById(section);
    if (targetSection) {
      // Scroll to the section
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-style" style={styles.navbar}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#Home"
          onClick={() => handleNavItemClick("Home")}
        >
          Courtney Sherman
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
              className={`nav-link ${
                activeSection === "AboutMe" ? "active" : ""
              }`}
              href="#about"
              onClick={() => handleNavItemClick("AboutMe")}
            >
              About Me
            </a>
            <a
              className={`nav-link ${
                activeSection === "Portfolio" ? "active" : ""
              }`}
              href="#portfolio"
              onClick={() => handleNavItemClick("Portfolio")}
            >
              Portfolio
            </a>
            <a
              className={`nav-link ${
                activeSection === "Resume" ? "active" : ""
              }`}
              href="#resume"
              onClick={() => handleNavItemClick("Resume")}
            >
              Resume
            </a>
            <a
              className={`nav-link ${
                activeSection === "ContactMe" ? "active" : ""
              }`}
              href="#contact-card"
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
