import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/promisleo-logo-transparent.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-scroll";

function Navigations() {
  return (
    <>
      <nav className="navbar-custom d-flex align-items-center justify-content-between px-5 py-3 m">
        <div className="logo ms-1">
  <img src={logo} alt="PromisLeo Logo" style={{ height: "50px" }} />
</div>


        <ul className="nav-links d-flex list-unstyled m-0">
          <li>
            <Link to="#" smooth={true} duration={500} className="nav-link-custom">
              Overview
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={500} className="nav-link-custom">
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

        <a href="" download className="btn btn-outline-secondary btn-download">
          Download CV
        </a>
      </nav>
    </>
  );
}

export default Navigations;
