import { useOutlet } from "react-router";
import { useState } from "react";

import City from "./components/City";
import Ribbon from "./components/Ribbon";
import { ROUTES } from "./util/constants";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { isMobile, pageName } from "./util/util";

const mobile = isMobile();
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const skipNavigation = () => document.querySelector('main')?.focus()

function App() {
  const [isNight, setIsNight] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const page = pageName()

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
    (route) => route?.path === location.pathname
  )?.nodeRef;

  const shouldTransitionDelay = !mobile && !isReduced;

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={shouldTransitionDelay ? 400 : 0}
        classNames="page"
        unmountOnExit
      >
        {() => (
          <div
            ref={nodeRef}
            className={`city ${isNight ? "night" : ""} ${page}-page page`}
          >
            <button
              className="skip-nav-button"
              onClick={skipNavigation}
            >Skip navigation</button>
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
