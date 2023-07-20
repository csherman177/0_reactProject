import React from "react";

const styles = {
  navbar: {
    margin: 20,
    background: "#e8eaf6",
  },
};

function Navbar() {
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
            <a className="nav-link active" aria-current="page" href="#Home">
              Home
            </a>
            <a className="nav-link" href="#AboutMe">
              About Me
            </a>
            <a className="nav-link" href="#Portfolio">
              Portfolio
            </a>
            <a className="nav-link" href="#Resume">
              Resume
            </a>
            <a className="nav-link" href="#ContactMe">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
