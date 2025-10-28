import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../assets/image.png";
import Typewriter from "typewriter-effect";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Description() {
  return (
    <>
      {" "}
      <div className="description ms-3">
        <div className="paragraph">
          <p>
            I'm a{" "}
            <Typewriter
              options={{
                strings: [
                  "Web Developer ",
                  "UI/UX Designer",
                  "Django Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>

          <h3>KAMANA Fabien</h3>

          <p>
            I design and build beautiful, responsive web interfaces that make
            the internet a better place. Passionate about UI/UX, accessibility,
            and creating meaningful user experiences.
          </p>
          <button class="btn btn-outline-primary">Get Started</button>
         
         
        </div>
        {/* <div className="image ">
          <img src={images} alt="Image not imported" />
        </div> */}
      </div>
    </>
  );
}
export default Description;
