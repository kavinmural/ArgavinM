import './Projects.css';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree } from './ProjectData';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projHeader"></div>
            <ProjectCard title={projectOne.title} description={projectOne.description} gitLink={projectOne.link}/>
            <ProjectCard title={projectTwo.title} description={projectTwo.description} gitLink={projectTwo.link}/>
            <ProjectCard title={projectThree.title} description={projectThree.description} gitLink={projectThree.link}/>
        </div>
    )
}
