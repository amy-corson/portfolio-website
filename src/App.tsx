import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import { ROUTES } from "./util/constants";
import Nav from "./components/Nav";
import City from "./components/City";

function App() {
  const [isNight, setIsNight] = useState(false);
  return (
    <City isNight={isNight}>
      <button className="toggle" onClick={() => setIsNight(!isNight)}>
        toggle d/n
      </button>
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
