import { Link } from "react-router";

type Project = {
  url: string;
  big?: boolean;
  title: string;
  linkText?: string;
  description?: string;
  image?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const internalLink = project.url.startsWith("/");
  const Card = internalLink ? Link : "a";

  return (
    <Card
      className={`${project.big ? "big" : ""} project-card`}
      to={internalLink ? project.url : ""}
      href={internalLink ? "" : project.url}
    >
      <div className="project-image">
        <img src={project.image} />
        <div className="card-text">{project.linkText}</div>
      </div>
      <h3>{project.title}</h3>
      {project.description && <p>{project.description}</p>}
    </Card>
  );
};

export default ProjectCard;
