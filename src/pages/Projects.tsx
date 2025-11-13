import ProjectCard from "../components/ProjectCard";
import { ProjectsList } from "../util/constants";

const Projects = () => {
  return (
    <div className="projects-page page-container">
      <h1>projects</h1>

      {ProjectsList.map((project, i, a) => (
        <>
          <ProjectCard key={project.title} project={project} />{" "}
          {i + 1 != a.length && <hr />}
        </>
      ))}
    </div>
  );
};

export default Projects;
