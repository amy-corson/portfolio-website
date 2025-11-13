import ProjectCard from "../components/ProjectCard";
import { ProjectsList } from "../util/constants";

const Projects = () => {
  return (
    <div className="projects-page page-container">
      <h1>projects</h1>

      {ProjectsList.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default Projects;
