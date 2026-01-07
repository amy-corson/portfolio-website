import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { ProjectsList } from "../util/constants";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="page-container">
        <h1>projects</h1>
        <p>
          I&apos;m lucky to work on an open source project where my a lot of my
          day-to-day work is public. Below you&apos;ll find some of the projects
          I&apos;m proud of. You&apos;ll also probably find some missteps
          I&apos;m embarassed by! This job can be humbling.
        </p>
        <div className="projects">
          {ProjectsList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
