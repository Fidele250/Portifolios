import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../assets/IFOTOoggg.jpg";
import Typewriter from "typewriter-effect";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Description.css"; // custom styles

function Description() {
  return (
    <>
      <div className="description-container">
        {/* Text Section */}
        <div className="paragraph">
          <p className="intro-text">
            I'm a{" "}
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer","Content Creator"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>

          <h3 className="name-text">Promis Leonce TWAYINGANYIKI</h3>

          <p className="description-text">
            I design and build beautiful, responsive web interfaces that make
            the internet a better place. Passionate about UI/UX, accessibility,
            and creating meaningful user experiences.
          </p>

          <button className="btn btn-outline-primary get-started-btn">
            Get Started
          </button>
        </div>

        {/* Animated Circular Image */}
        <div className="image-wrapper">
          <img src={images} alt="KAMANA Fabien" className="profile-image" />
        </div>
      </div>
    </>
  );
}

export default Description;
