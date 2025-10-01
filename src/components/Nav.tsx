import { Link, useLocation } from "react-router";
import { ROUTES } from "../util/constants";

import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarProps {}

const Nav: React.FC<NavBarProps> = () => {
  const isHome = useLocation().pathname === "/";

  return (
    <nav className="home-nav">
      <ul>
        {!isHome && <Link to={ROUTES.home}>Home</Link>}
        <Link to={ROUTES.about}>About Me</Link>
        <Link to={ROUTES.projects}>Projects</Link>
        <a className="resume-link" href="">
          Resume
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
