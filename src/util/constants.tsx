import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

import advancedSettingsImage from "../assets/advanced-settings.png";

export const ROUTES = {
  home: {
    name: "Home",
    url: "/",
    component: <Home />,
  },
  about: {
    name: "About",
    url: "/about",
    component: <About />,
  },
  projects: {
    name: "Projects",
    url: "/projects",
    component: <Projects />,
  },
};

export const ProjectsList = [
  {
    title: "case study: advanced settings panel",
    url: "/projects/advanced-settings",
    image: advancedSettingsImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis dui quis lorem tincidunt, quis pellentesque arcu vulputate. Curabitur suscipit eros arcu. ",
    caseStudy: true,
    tags: ["Feature development", "UX design", "React"],
  },
  {
    title: "route sorting for OTP2",
    url: "https://github.com/opentripplanner/otp-ui/pull/814",
  },
];
