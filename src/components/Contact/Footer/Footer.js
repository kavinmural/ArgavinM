import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerSocials">
                <FontAwesomeIcon className="socialBtn" icon={faGithub} size="2x" color="#ee8080"/>
                <FontAwesomeIcon className="socialBtn" icon={faLinkedin} size="2x" color="#ee8080"/>
                <FontAwesomeIcon className="socialBtn" icon={faInstagram} size="2x" color="#ee8080"/>
                <FontAwesomeIcon className="socialBtn" icon={faEnvelope} size="2x" color="#ee8080"/>
            </div>
        </footer>
    )
}
