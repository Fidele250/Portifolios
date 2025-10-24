import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import images from "../assets/image.png";
function Navigations() {
  return (
    <>
   <nav className="navbar-custom d-flex align-items-center justify-content-between px-5 py-3">
  <h2 className="logo">Kamana</h2>

  <ul className="nav-links d-flex list-unstyled m-0">
    <li><a href="#home" className="nav-link-custom">Home</a></li>
    <li><a href="#contact" className="nav-link-custom">Contact me</a></li>
    <li><a href="#about" className="nav-link-custom">About-us</a></li>
  </ul>

  <a
    href=""
    download
    className="btn btn-outline-light btn-download"
  >
    Download CV
  </a>
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
