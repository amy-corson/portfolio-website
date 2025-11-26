import { Routes, Route, useLocation } from "react-router";
import { useState } from "react";

import City from "./components/City";
import Ribbon from "./components/Ribbon";
import { ROUTES } from "./util/constants";
import { Skyline } from "./assets/city/Skyline";

function App() {
  const [isNight, setIsNight] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const path = useLocation().pathname;
  const slashIndex = path.lastIndexOf("/");
  const smallPath = path.substring(slashIndex + 1);
  const page = smallPath ? smallPath : "home";

  const { advancedSettings } = ROUTES.projects.subProjects;
  return (
    <div className={`city ${isNight ? "night" : ""} ${page}-page`}>
      <Ribbon
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        toggleIsNight={() => setIsNight(!isNight)}
        isNight={isNight}
      />
      <Skyline />
      <div className="house-base">
        <Routes>
          <Route path={ROUTES.home.url} element={ROUTES.home.component} />
          <Route path={ROUTES.about.url} element={ROUTES.about.component} />
          <Route path={ROUTES.projects.url}>
            <Route index element={ROUTES.projects.component} />
            <Route
              path={advancedSettings.url}
              element={advancedSettings.component}
            />
          </Route>
        </Routes>
      </div>
      <City isNight={isNight} page={page}></City>
    </div>
  );
}

export default App;
