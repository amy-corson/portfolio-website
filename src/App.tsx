import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { useState } from 'react';
import { ROUTES } from './util/constants';
import Nav from './components/Nav';



function App() {
  const [isNight, setIsNight] = useState(true)

  console.log(isNight)

  document.body.classList.toggle("night", isNight)

  return (
    <>
      <button onClick={() => setIsNight(!isNight)}>
        toggle d/n
      </button>
      <Nav />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.projects} element={<Projects />} />
      </Routes>
    </>
    
  )
}

export default App
