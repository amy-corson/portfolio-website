import { Link } from "react-router";
import LaunchIcon from "@mui/icons-material/Launch";
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
      to={internalLink ? project.url : ""}
      href={internalLink ? "" : project.url}
    >
      <div className="project-image">
        <img src={project.image} loading="lazy" />
        <div className="card-text">{project.linkText}</div>
      </div>
      <p className="external-link">
        {project.title} {!internalLink && <LaunchIcon fontSize="small" />}
      </p>
      {project.description && <p>{project.description}</p>}
    </Card>
  );
};

export default ProjectCard;
