import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects container">
      <div className="projects searchbar">
        <div className="search-filter react">
          <button className="search-filter btn">React</button>
        </div>
        <div className="search-filter html">
          <button className="search-filter btn">HTML5</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
