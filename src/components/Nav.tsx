import {  ROUTES } from "../util/constants";

import ExternalSocialLinks from "./ExternalLinks";
import ExternalLinkWithIcon from "../util/ExternalLinkWithIcon";
import { Link } from "react-router-dom";

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
          <ExternalLinkWithIcon
            url="https://drive.google.com/file/d/1825s6gAfmFaU0piygZFFSIgbyUN7Gfa-/view?usp=sharing"
            string="Resume"
            classNames="icon-on-hover"
          />
        </li>
      </ul>
      <ExternalSocialLinks />
    </nav>
  );
};

export default Nav;
