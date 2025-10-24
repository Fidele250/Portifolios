import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import images from "../assets/image.png";
function Navigations() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="#">
            <h3>Kamana</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ms-3 ">
                <a class="nav-link " aria-current="page" href="#">
                  <strong>Home</strong>
                </a>
              </li>
              <li class="nav-item ms-3">
                <a class="nav-link" href="#">
                  <strong>Contant me</strong>
                </a>
              </li>
              <li class="nav-item ms-3">
                <a class="nav-link" href="#">
                  <strong>About-us</strong>
                </a>
              </li>
            </ul>
            <a
              href=""
              download
              className="btn btn-outline-secondary ms-5 bi bi-download "
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <div className="description ms-3">
        <div className="paragraph">
          <p>I'm</p>

          <h3>KAMANA Fabien</h3>

          <p>
            I design and build beautiful, responsive web interfaces that make
            the internet a better place. Passionate about UI/UX, accessibility,
            and creating meaningful user experiences.
          </p>
          <button class="btn btn-outline-primary">Get Started</button>
        </div>
        <div className="image ">
          <img src={images} alt="Image not imported" />
        </div>
      </div>
    </>
  );
}
export default Navigations;
