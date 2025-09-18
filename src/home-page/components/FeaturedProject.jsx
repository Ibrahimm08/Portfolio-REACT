import "../styles/FeaturedProject.css";
import image from "../images/arrow.svg";

const FeaturedProject = () => {
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
      <div className="ft-project-desc">
        <h1>Header</h1>
        <p>Content</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
