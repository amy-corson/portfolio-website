import { useOutlet } from "react-router";
import { useState } from "react";

import City from "./components/City";
import Ribbon from "./components/Ribbon";
import { ROUTES } from "./util/constants";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const [isNight, setIsNight] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const path = location.pathname;
  const slashIndex = path.lastIndexOf("/");
  const smallPath = path.substring(slashIndex + 1);
  const page = smallPath ? smallPath : "home";

  const currentOutlet = useOutlet();
  const subPaths = ROUTES.filter((route) => route.children).flatMap((route) =>
    route.children?.flatMap((routeChild) => {
      return {
        ...routeChild,
        path: `${route.path}/${routeChild.path}`,
      };
    })
  );
  const nodeRef = [...ROUTES, ...subPaths].find(
    (route) => route?.path === path
  )?.nodeRef;
  return (
    <SwitchTransition>
      <CSSTransition
        key={path}
        nodeRef={nodeRef}
        timeout={400}
        classNames="page"
        unmountOnExit
      >
        {() => (
          <div
            ref={nodeRef}
            className={`city ${isNight ? "night" : ""} ${page}-page page`}
          >
            <Ribbon
              setDrawerOpen={setDrawerOpen}
              drawerOpen={drawerOpen}
              toggleIsNight={() => setIsNight(!isNight)}
              isNight={isNight}
            />
            <main tabIndex={-1}>{currentOutlet}</main>

            {page === "home" && <City isNight={isNight} page={page}></City>}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
