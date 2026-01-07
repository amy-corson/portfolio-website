import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ExternalSocialLinks = () => {
  return (
    <ul className="external-links">
      <li>
        <a href="https://github.com/amy-corson">
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/amy-corson-68912857/">
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a href="https://github.com/amy-corson">
          <MailOutlineIcon />
        </a>
      </li>
    </ul>
  );
};

export default ExternalSocialLinks;
