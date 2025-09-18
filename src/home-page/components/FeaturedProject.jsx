import "../styles/FeaturedProject.css";
import { useEffect, useRef, useState } from "react";
import image from "../images/arrow.svg";
import imgBlackJack from "../images/BlackjackWeb.png";


const FeaturedProject = () => {
  const [inView, setInView] = useState(false);
  const refference = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // How much % element has to be in view
    );

    if (refference.current) {
      observer.observe(refference.current);
    }

    return () => {
      if (refference.current) {
        observer.unobserve(refference.current);
      }
    };
  }, []);

  // In view play animation to summon featured projects
  useEffect(() => {
    console.log(inView);
    if (inView) {
      document.documentElement.style.setProperty("--ft-project-scale", "100%");
    } else {
      document.documentElement.style.setProperty("--ft-project-scale", "0%");
    }
  }, [inView]);

  return (
    <div className="featured container">
      <div className="featured-projects">
        <div className="ft-project projecta">
          <img src={imgBlackJack} alt="" />
          <figcaption>Blackjack 21</figcaption>
        </div>
        <div className="ft-project projectb">
          <img src="" alt="" />
        </div>
        <div className="ft-project projectc">
          <img src="" alt="" />
        </div>
      </div>
      <div className="ft-project-arrow">
        <img src={image} alt="" />
        <p>See More Projects</p>
        <div className="ft-project-arrow-cursor">
          <div className="ft-project-arrow-cursor-cursor-inner"></div>
        </div>
      </div>
      <div ref={refference} className="ft-project-desc">
        <h1>Featured Projects</h1>
        <p>
          Here are a few projects that I have completed during my time at
          BigBite, which I enjoyed developing and am proud of the outcome.
        </p>
        <p>
          The 21 Blackjack project was created using HTML, CSS, and JavaScript.
          I started this project after being tasked with previous projects,
          where I mainly practiced JS. This project was intitally intended to be
          simple numbers and basic UI with no oponent, which I felt was too
          bland and decided to make improvement by adding a dealer, ace choices,
          ect...
        </p>
        <p>Add more text later</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
