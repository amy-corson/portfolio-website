import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

import advancedSettingsImage from "../assets/projects/advanced-settings.png";
import portfolioSmall from "../assets/projects/portfolio-small.png";
import nearbyFilteringImage from "../assets/projects/nearby-filtering.png";
import savedTripsImage from "../assets/projects/saved-trips.png";
import routeViewer from "../assets/projects/route-viewer.png";

import advancedDesktop from "../assets/case-study/advanced-desktop.png";
import advancedMobile from "../assets/case-study/advanced-phone.png";
import AdvancedSettingsCase from "../pages/AdvancedSettingsCase";
import { createRef, type JSX, type RefObject } from "react";

type Routes = {
  name: string,
  path: string,
  element: JSX.Element
  nodeRef: RefObject<HTMLDivElement | null>
  children?: Array<Routes>
}

export const ROUTES: Array<Routes> = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    name: "Projects",
    path: "/projects",
    element: <Projects />,
    nodeRef: createRef<HTMLDivElement>(),
    children: [
      {
        name: "Advanced Settings",
        path: "advanced-settings",
        element: <AdvancedSettingsCase />,
        nodeRef: createRef<HTMLDivElement>(),
      },
    ],
  },
];

const githubLinkText = "View on Github";

export const ProjectsList = [
  {
    title: "Case Study: Advanced Settings Panel",
    url: "/projects/advanced-settings",
    image: advancedSettingsImage,
    big: true,
    linkText: "Read More About the Redesign",
  },
  {
    title: "Nearby View Filtering",
    url: "",
    // description:
    // "Adding filters to OTP's nearby entities list. This PR is dedicated to anyone in downtown Seattle trying to catch the bus while standing next to 17 undocked Lime scooters.",
    image: nearbyFilteringImage,
    linkText: githubLinkText,
  },
  {
    title: "User Saved Trip Cards",
    url: "",
    image: savedTripsImage,
    linkText: githubLinkText,
  },
  {
    title: "Portfolio Website",
    url: "",
    image: portfolioSmall,
    linkText: githubLinkText,
  },
  {
    title: "Route Sorting For OTP2",
    url: "https://github.com/opentripplanner/otp-ui/pull/814",
    image: routeViewer,
    linkText: githubLinkText,
  },
];

export const CASE_STUDY = {
  title: "",
  desktopImage: advancedDesktop,
  mobileImage: advancedMobile,
  details: {
    myRole: ["Design", "Lead developer", "Cross-team collaboration"],
    team: ["Client UX Team", "Project manager", "3 developers"],
    duration: "5 months",
  },
};


export const ANIMATION_DELAY = 2000
