import "../styles/Greeting.css";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Greeting = () => {
  return (
    <div className="greeting container">
      <div className="greeting-bg"></div>
      <div className="envalope">
        <div className="envalope-design-back"></div>
        <div className="envalope-design-mid"></div>
        <div className="envalope-design-front">
          <div className="title">
            <div className="image">
              <img src="" alt="" />
              <div className="line" />
            </div>
            <h1>
              Hello, I am Ibrahim Maqsood <br />
              I'm pursuing a career <span>Software Development</span>
            </h1>
          </div>
          <div className="description">
            <div className="separator"></div>
            <p>
              I'm Ibrahim, a student at Middlesbrough College where I am
              currently studying my 2nd year of my T-Level in Digital
              Production, Development, and Design. As apart of my course I am a
              Junior Software Assistant at BigBite.
            </p>
            <div className="socials">
              <a target="_blank" href="https://github.com/Ibrahimm08">
                <AiOutlineGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ibrahimmaqsood/"
              >
                <AiOutlineLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
