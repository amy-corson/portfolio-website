import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import { ROUTES } from "./util/constants";
import Nav from "./components/Nav";
import City from "./components/City";
import { isMobile } from "./util/util";

import Drawer from "@mui/material/Drawer";
import Ribbon from "./components/Ribbon";

function App() {
  const [isNight, setIsNight] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const path = useLocation().pathname.replace("/", "");
  const mobile = window.matchMedia("(width <= 600px)");
  console.log(mobile);
  return (
    <City isNight={isNight} page={path ? path : "home"}>
      <Ribbon
        toggleDrawer={() => setDrawerOpen(!drawerOpen)}
        toggleIsNight={() => setIsNight(!isNight)}
        drawerOpen={drawerOpen}
        isMobile={true}
      />
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: isNight ? "#4E6255" : "#F3EBE3",
              color: isNight ? "#fff" : "#744B53",
              width: "100%",
            },
          },
        }}
      >
        <Nav />
      </Drawer>
      <Nav />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.projects} element={<Projects />} />
      </Routes>
    </City>
  );
}

export default App;
