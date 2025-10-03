import { Link, useLocation } from "react-router";
import { ROUTES } from "../util/constants";

import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarProps {}

const Nav: React.FC<NavBarProps> = () => {
  const isHome = useLocation().pathname === "/";

  return (
    <nav className={isHome ? "home-nav" : ""}>
      <ul>
        {!isHome && (
          <li>
            <Link to={ROUTES.home}>home</Link>
          </li>
        )}
        <li>
          <Link to={ROUTES.about}>about me</Link>
        </li>
        <li>
          <Link to={ROUTES.projects}>projects</Link>
        </li>
        <li>
          <a className="resume-link" href="">
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
