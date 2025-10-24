import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import images from "../assets/image.png";
import Typewriter from "typewriter-effect";

function Navigations() {
  return (
    <>
   <nav className="navbar-custom d-flex align-items-center justify-content-between px-5 py-3">
  <h2 className="logo">
  <img
    src="https://static-cse.canva.com/blob/1149004/feature12.063084d9.jpg"
    alt="Logo"
    width={20}
    height={30}
    style={{ objectFit: "contain" }}
  />
</h2>

  <ul className="nav-links d-flex list-unstyled m-0">
    <li><a href="#home" className="nav-link-custom">Home</a></li>
       <li><a href="#about" className="nav-link-custom">Know Me</a></li>
    <li><a href="#contact" className="nav-link-custom">Contact me</a></li>
   <li><a href="#project" className="nav-link-custom">Project Work</a></li>
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
         <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.5rem", color: "#00ff80" }}>
  <p style={{ margin: 0 }}>I'm</p>
  <Typewriter
    options={{
      strings: ["Web Developer", "UI/UX Designer", "Tech Enthusiast"],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    }}
  />
</div>


          <h3>KAMANA Fabien</h3>

          <p>
            I design and build beautiful, responsive web interfaces that make
            the internet a better place. Passionate about UI/UX, accessibility,
            and creating meaningful user experiences.
          </p>
          <button id="#about" class="btn btn-outline-primary">Know me</button>
        </div>
        <div className="image ">
          <img src={images} alt="Image not imported" />
        </div>
      </div>
    </>
  );
}
export default Navigations;
