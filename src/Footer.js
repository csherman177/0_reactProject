import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"; // Import the necessary icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h2>Connect with Me</h2>
          <ul className="social-links">
            {/* Replace the '#' with your actual profile URLs */}
            <li>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/your-stackoverflow-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStackOverflow />
              </a>
            </li>
            {/* You can add more links here */}
          </ul>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
