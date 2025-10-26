import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navigations() {
  return (
    <>
      <nav className="navbar-custom d-flex align-items-center justify-content-between px-5 py-3 m">
        <h2 className="logo ms-5">Kamana</h2>

        <ul className="nav-links d-flex list-unstyled m-0">
          <li>
            <a href="#home" className="nav-link-custom">
              Home
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link-custom">
              Contact me
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link-custom">
              About-us
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link-custom">
              Projects
            </a>
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
