import { Routes, Route, useLocation } from "react-router";
import { useState } from "react";

import City from "./components/City";
import Ribbon from "./components/Ribbon";
import { ROUTES } from "./util/constants";

function App() {
  const [isNight, setIsNight] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const path = useLocation().pathname.replace("/", "");
  window.onresize = () => {};
  return (
    <City isNight={isNight} page={path ? path : "home"}>
      <Ribbon
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        toggleIsNight={() => setIsNight(!isNight)}
        isNight={isNight}
      />
      <Routes>
        <Route path={ROUTES.home.url} element={ROUTES.home.component} />
        <Route path={ROUTES.about.url} element={ROUTES.about.component} />
        <Route path={ROUTES.projects.url}>
          <Route index element={ROUTES.projects.component} />
          <Route
            path="advanced-settings"
            element={<div>this is advancedsettings</div>}
          />
        </Route>
      </Routes>
    </City>
  );
}

export default App;
