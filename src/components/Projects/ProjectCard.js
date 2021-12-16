import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({title, description, gitLink}) {
    return (
        <div className="projectCard">
            <h4 className="projTitle">{title}</h4>
            <p className="projDesc">{description}</p>
            <a href={gitLink} target="_blank"><FontAwesomeIcon className="socialBtn projLink" icon={faGithub} size="3x" color="azure"/></a>
        </div>
    )
}