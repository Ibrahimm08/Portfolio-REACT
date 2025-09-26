import { useEffect, useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  // https://docs.github.com/en/rest/repos?apiVersion=2022-11-28
  // Add fetching for projects from organization GitHub repos (Just like a game)

  // Old fetch
  // Use incase Topic fetching dont worke

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Ibrahimm08/repos")
  //     .then((response) => response.json())
  //     .then((data) => setProjects(data))
  //     .catch((error) => console.error("Error fetching projects:"));
  // }, []);

  useEffect(() => {
    const projectsTopics = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Ibrahimm08/repos"
        );
        const repos = await response.json();

        const enrichedRepos = await Promise.all(
          repos.map(async (repo) => {
            const topicResponse = await fetch(
              `https://api.github.com/repos/Ibrahimm08/${repo.name}/topics`
            );
            const topicData = await topicResponse.json();
            return { ...repo, topics: topicData.names };
          })
        );

        setProjects(enrichedRepos);
      } catch (error) {
        console.error("Couldnt fetch topics");
      }
    };

    projectsTopics();
  }, []);

  const handleFilter = (chosenFilter) => {
    setFilter(chosenFilter);
    setExpanded(null);
  };

  const filterdProjects =
    filter == "all"
      ? projects
      : projects.filter((project) =>
          project.topics?.includes(filter.toLowerCase())
        );

  return (
    <div className="projects container">
      <div className="projects searchbar">
        <div className="search-filter react">
          <button
            className="search-filter btn"
            onClick={() => handleFilter("reactjs")}
          >
            React
          </button>
        </div>
        <div className="search-filter html">
          <button
            className="search-filter btn"
            onClick={() => handleFilter("HTML")}
          >
            HTML5
          </button>
        </div>
      </div>
      <div className="projects-grid">
        {filterdProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${expanded == index ? "expanded" : ""}`}
            onClick={() => setExpanded(expanded == index ? null : index)}
          >
            <h3>{project.name}</h3>
            {expanded === index && (
              <div className="project-details">
                <p>{project.description || "No description"}</p>
                <p>Language: {project.language}</p>
                <a href={project.html_url} target="_blank">
                  See on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
