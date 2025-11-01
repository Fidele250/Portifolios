import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5 d-flex flex-column">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">

        {/* Navigation Links */}
        <div className="mb-4 mb-md-0 text-center text-md-start">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="nav-links d-flex flex-column align-items-center align-items-md-start list-unstyled m-0 gap-2">
            <li>
              <Link to="home" smooth={true} duration={500} className="nav-link-custom">
                Overview
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="nav-link-custom">
                Profile
              </Link>
            </li>
            <li>
              <Link to="stacks" smooth={true} duration={500} className="nav-link-custom">
                Expertise
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500} className="nav-link-custom">
                Works
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="nav-link-custom">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="mb-4 mb-md-0 d-flex justify-content-center gap-3">
          <a href="https://github.com/leopromus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/twayinganyiki-promis-leonce-17545b231/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
        </div>

      </div>

      {/* Copyright at bottom */}
      <div className="mt-4 text-center">
        <p className="mb-0">&copy;2025 PromisLeo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
