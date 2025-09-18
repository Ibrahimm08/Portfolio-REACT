import "../styles/FeaturedProject.css";
import image from "../images/arrow.svg";
import { useEffect, useRef, useState } from "react";

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
    if (inView){
      document.documentElement.style.setProperty("--ft-project-scale", "100%");
    } else{
      document.documentElement.style.setProperty("--ft-project-scale", "0%");
    }
  }, [inView]);

  return (
    <div className="featured container">
      <div className="featured-projects">
        <div className="ft-project projecta"></div>
        <div className="ft-project projectb"></div>
        <div className="ft-project projectc"></div>
      </div>
      <div className="ft-project-arrow">
        <img src={image} alt="" />
        <p>See More Projects</p>
        <div className="ft-project-arrow-cursor">
          <div className="ft-project-arrow-cursor-cursor-inner"></div>
        </div>
      </div>
      <div ref={refference} className="ft-project-desc">
        <h1>Header</h1>
        <p>Content</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
