import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Tooltip } from "@mui/material";
import { useState } from "react";

export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const ExternalSocialLinks = () => {
  const [buttonCopied, setButtonCopied] = useState(false);

  const mobile = isMobile()

  const onClick = () => {
    if (mobile) {
      window.location.href = "mailto:aecorson@gmail.com"
    } else {
      navigator.clipboard.writeText("aecorson@gmail.com")
    }
    setButtonCopied(true)
    setTimeout(() => setButtonCopied(false), 2000)
  }
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
