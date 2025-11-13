import { Link } from "react-router";
import { ROUTES } from "../util/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarProps {}

const Nav: React.FC<NavBarProps> = () => {
  return (
    <nav>
      <ul className="internal-links">
        {Object.values(ROUTES).map((route) => (
          <li key={route.name}>
            <Link to={route.url}>{route.name}</Link>
          </li>
        ))}
        <li>
          <a className="resume-link" href="">
            Resume
          </a>
        </li>
      </ul>
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
    </nav>
  );
};

export default Nav;
