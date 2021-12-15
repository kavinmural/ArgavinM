import NavBar from './components/NavBar/NavBar';
import Sections from './components/Sections/Sections';
import NavDisplay from './components/NavDisplay/NavDisplay';
import './config/global.css';
import {useState} from 'react';

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="app">
      <NavBar navOpen={navOpen} setNavOpen={setNavOpen}/>
      <NavDisplay navOpen={navOpen} setNavOpen={setNavOpen}/>
      <Sections/>
    </div>
  )
}

