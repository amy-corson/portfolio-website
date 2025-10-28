import { Link } from "react-router";
import { ROUTES } from "../util/constants";

import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarProps {}

const Nav: React.FC<NavBarProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.home}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.about}>About Me</Link>
        </li>
        <li>
          <Link to={ROUTES.projects}>Projects</Link>
        </li>
        <li>
          <a className="resume-link" href="">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
