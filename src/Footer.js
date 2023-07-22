import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h2>Connect with Me</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/csherman177"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>{" "}
          </ul>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Courtney Sherman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
