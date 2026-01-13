import { Link } from "react-router";
import ExternalLinkWithIcon from "../util/ExternalLinkWithIcon";

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
      target={internalLink ? "" : "_blank"}
      className={`${project.big ? "big" : ""} project-card icon-on-hover`}
      to={project.url}
      href={internalLink ? "" : project.url}
    >
      <div className="project-image">
        <img src={project.image} />
        <div className="card-text">{project.linkText}</div>
      </div>
      {!internalLink ? (
        <ExternalLinkWithIcon url={project.url} string={project.title} />
      ) : (
        <p>{project.title}</p>
      )}
      {project.description && <p>{project.description}</p>}
    </Card>
  );
};

export default ProjectCard;
