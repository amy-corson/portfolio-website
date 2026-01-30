import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { ProjectsList } from "../util/constants";

const Projects = () => {
  const subProject = location.pathname.includes("advanced");
  return (
    <div className={!subProject ? "projects-page" : ""}>
      <Outlet />
      {!subProject && (
        <div className="page-container">
          <h1>projects</h1>
          <p>
            I&apos;m lucky to work on an open source project where my a lot of
            my day-to-day work is public. Below you&apos;ll find some of the
            projects I&apos;m proud of.
          </p>
          <p>
            All of the projects featured here were developed from my designs. You can look at the Advanced Settings case study to read more about some of my design process and see wireframes. 
          </p>
          <div className="projects">
            {ProjectsList.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Projects;
