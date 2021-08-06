import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="slider">
                <div className="container">
                    <div className="item">

                    </div>
                </div>
            <FontAwesomeIcon className="leftArrow" icon={faArrowAltCircleLeft} size="3x"></FontAwesomeIcon>
            <FontAwesomeIcon className="rightArrow" icon={faArrowAltCircleRight} size="3x"></FontAwesomeIcon>
            </div>
        </div>
    )
}
