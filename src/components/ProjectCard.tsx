import { Link } from "react-router";

type Project = {
  url: string;
  title: string;
  tags?: string[];
  linkText?: string;
  image?: string;
  description?: string;
};

const tag = (tag: string) => <span className="project-tag">{tag}</span>;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} />
      </div>
      <div className="project-tags">
        {project.tags && project.tags.map((t) => tag(t))}
      </div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.url.startsWith("/") ? (
        <Link to={project.url} className="project-link">
          {project.linkText}
        </Link>
      ) : (
        <a
          href={project.url}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          {project.linkText}
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
