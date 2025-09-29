import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { ROUTES } from './util/route-constants';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <NavBar/>
   <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.projects} element={<Projects />} />
   </Routes>
    </>
    
  )
}

export default App
