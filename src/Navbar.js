import React from "react";

const styles = {
  navbar: {
    margin: 20,
    background: "#e8eaf6",
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav class="navbar-style" style={styles.navbar}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              About Me
            </a>
            <a class="nav-link" href="#">
              Portfolio
            </a>
            <a class="nav-link" href="#">
              Resume
            </a>
            <a class="nav-link" href="#">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
