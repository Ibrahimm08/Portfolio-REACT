import { useEffect, useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  // Add images using /images/${repo.name}.png
  // Add topics to bigbite repos

  // Risk of rate limit too many refreshes
  // Set username to Ibrahimm08

  // Gets the repos where user contributed
  const checkOwner = async (username, repos) => {
    const contributed = [];

    for (const repo of repos) {
      const response = await fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contributors`
      );
      const contributors = await response.json();
      console.log("Contributors:", contributors);

      // some returns true or false
      const amContributer = contributors.some(
        (user) => user.login.toLowerCase() === username.toLowerCase()
      );

      if (amContributer) {
        contributed.push(repo);
      }
    }
    return contributed;
  };

  // On mount get repositories from user and organisation
  useEffect(() => {
    const projectTopics = async () => {
      try {
        // Use local storage to prevent too many requests
        if (localStorage.getItem("Ibrahimm08's repos") != null) {
          console.log("Retrieved repos from storage");
          setProjects(JSON.parse(localStorage.getItem("Ibrahimm08's repos")));
        } else {
          const userResponses = await fetch(
            "https://api.github.com/users/Ibrahimm08/repos"
          );

          const userRepos = await userResponses.json();

          const orgResponses = await fetch(
            "https://api.github.com/orgs/BB-WEX/repos"
          );

          const orgRepos = await orgResponses.json();

          const allRepos = [...userRepos, ...orgRepos];

          const checkedRepos = await checkOwner("Ibrahimm08", allRepos);
          console.log("Checked Repos:", checkedRepos);

          const combinedRepos = await Promise.all(
            checkedRepos.map(async (repo) => {
              const topicResponse = await fetch(
                // owner.login to get org and user
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
                {
                  headers: {
                    Accept: "application/vnd.github.mercy-preview+json",
                  },
                }
              );

              const topicData = await topicResponse.json();
              return { ...repo, topics: topicData.names };
            })
          );

          console.log("Stored repos in storage");
          localStorage.setItem(
            "Ibrahimm08's repos",
            JSON.stringify(combinedRepos)
          );
          setProjects(combinedRepos);
        }
      } catch (error) {
        console.error("Couldn't fetch repos", error);
      }
    };

    projectTopics();
  }, []);

  const handleFilter = (chosenFilter) => {
    if (chosenFilter == filter) {
      setFilter("all");
    } else {
      setFilter(chosenFilter);
    }
    setExpanded(null);
  };

  const filteredProjects =
    filter == "all"
      ? projects
      : projects.filter((project) =>
          project.topics?.includes(filter.toLowerCase())
        );

  console.log(filteredProjects);
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
        {filteredProjects.map((project, index) => (
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
        )) || <h1 className="loading-msg">Loading...</h1>}
      </div>
    </div>
  );
};

export default Projects;
