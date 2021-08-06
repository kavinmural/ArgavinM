import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import "./Sections.css";


export default function Sections() {
    return (
        <div className="sections">
         <Landing/>
         <AboutMe/>
         <Projects/>
         <Experience/>
         <Contact/>
        </div>
    )
}
