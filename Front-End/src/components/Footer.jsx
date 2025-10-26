import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

function Footer() {
  return (
    <footer className="footer text-center text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-0">© 2025 Kamana Fabien. All rights reserved.</p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="footer-links list-unstyled d-flex justify-content-center mb-0">
              <li className="mx-2">
                <a href="#home">Home</a>
              </li>
              <li className="mx-2">
                <a href="#about">About</a>
              </li>
              <li className="mx-2">
                <a href="#projects">Projects</a>
              </li>
              <li className="mx-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
