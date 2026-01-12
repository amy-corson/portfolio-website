import { Link } from "react-router";
import { ROUTES } from "../util/constants";

import React from "react";
import ExternalSocialLinks from "./ExternalLinks";
import ExternalLinkWithIcon from "../util/ExternalLinkWithIcon";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarProps {
  closeDrawer?: () => void
}

const Nav: React.FC<NavBarProps> = ({closeDrawer}) => {
  return (
    <nav>
      <ul className="internal-links">
        {ROUTES.map((route) => (
          <li key={route.name} onClick={closeDrawer}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
        <li>
          <ExternalLinkWithIcon url='' string='Resume' classNames="icon-on-hover" />
        </li>
      </ul>
      <ExternalSocialLinks />
    </nav>
  );
};

export default Nav;
