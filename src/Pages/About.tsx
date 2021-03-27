import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai";

import Navbar from "../Components/Navbar";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="whoami">
        <h3>Who Am I</h3>
        <p>
          Hi , I'm ömer.I am a 3rd year computer engineering student.I am
          developing myself in the web technologies. I'm interested in the react
          library.
        </p>
      </div>
      <div className="contactMe">
        <a href="https://www.linkedin.com/in/omersahin1/">
          <AiFillLinkedin size={35} color={"b8c0c5"} />
        </a>
        <a href="https://github.com/1sahinomer1">
          <AiFillGithub size={35} color={"b8c0c5"} />
        </a>
        <a href="https://1sahinomer1.medium.com">
          <AiFillMediumSquare size={35} color={"b8c0c5"} />
        </a>
      </div>
    </div>
  );
}

export default About;
