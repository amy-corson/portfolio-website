import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { pageName } from "../util/util";

const ExternalSocialLinks = () => {
  const [buttonCopied, setButtonCopied] = useState(false);

  const path = pageName()


  const onClick = () => {
    navigator.clipboard.writeText("aecorson@gmail.com")
    setButtonCopied(true)
    setTimeout(() => setButtonCopied(false), 2000)
  }
  return (
    <ul className={`external-links ${path}-external-links`}>
      <li>
        <a href="https://github.com/amy-corson-ibigroup" aria-label="Github (Opens in external tab)" title="Github">
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/amy-corson-68912857/" aria-label="LinkedIn (Opens in external tab)" title="LinkedIn">
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <Tooltip title={buttonCopied ? "Copied!" : "Copy email to clipboard"} placement="bottom-start">
          <button onClick={onClick} aria-label="click to copy email address to clipboard">
            <MailOutlineIcon />
          </button>
        </Tooltip>
      </li>
    </ul>
  );
};

export default ExternalSocialLinks;
