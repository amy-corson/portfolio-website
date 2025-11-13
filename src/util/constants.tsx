import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

import advancedSettingsImage from "../assets/projects/advanced-settings.png";
import portfolioImage from "../assets/projects/portfolio-img.png";
import nearbyFilteringImage from "../assets/projects/nearby-filtering.png";
import savedTripsImage from "../assets/projects/saved-trips.png";
import routeViewer from "../assets/projects/route-viewer.png";

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
      "Updated the legacy trip form in OpenTripPlanner to include an advanced settings panel, taking into account client brand preferences, usability studies, and accessibility best practices.",
    linkText: "read more ->",
    tags: ["Feature development", "UX design", "React"],
  },
  {
    title: "nearby view filtering for OTP2",
    url: "",
    image: nearbyFilteringImage,
    description:
      "Created a set of filters to curate the list of nearby stops, stations, and micromobility entities inside the Nearby View.",
    linkText: "view on github ->",
    tags: ["Feature development", "OpenTripPlanner", "UX design", "React"],
  },
  {
    title: "user saved trip cards",
    url: "",
    image: savedTripsImage,
    description:
      "Refreshed the design of user saved trip cards to make the trip information easily readible at a glance, incorperate more client branding colors, and modernize the design.",
    linkText: "view on github ->",
    tags: ["UX design", "Web design", "React"],
  },
  {
    title: "portfolio website",
    url: "",
    image: portfolioImage,
    description:
      "This one might look familiar! My personal portfolio website built with React and SCSS.",
    linkText: "view on github ->",
    tags: ["React", "SCSS", "Web Design", "CSS Animations", "Vite", "MUI"],
  },
  {
    title: "route sorting for OTP2",
    url: "https://github.com/opentripplanner/otp-ui/pull/814",
    image: routeViewer,
    description:
      "Fixed sorting algorithms for OTP Route Viewer by better taking into account which version of the routing engine we're using. Updated Storybook documentation to better illustate to potential collaborators how each sorting method impacts the final list of routes.",
    linkText: "view on github ->",
    tags: ["Bug fix", "OpenTripPlanner", "Storybook", "Javascript", "Jest"],
  },
];
