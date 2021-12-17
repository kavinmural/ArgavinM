import './AboutMe.css';
import Kav from './../../data/images/Kav.jpeg';
import Button from '../Common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Resume from './../../data/ArgavinMural2021.pdf';


export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutme">
            <div className="leftBox">
                <div className="imgContainer">
                    <img className="Kav" src={Kav} alt="Kavin" rel="preload"></img>
                </div>
                <div className="socialsContainer">
                    <a href="https://github.com/kavinmural" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialBtn" icon={faGithub} size="3x" color="#ee8080"/></a>
                    <a href="https://www.linkedin.com/in/kavin-muralitharan/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialBtn" icon={faLinkedin} size="3x" color="#ee8080"/></a>
                    <a href="https://www.instagram.com/kavinmural/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialBtn" icon={faInstagram} size="3x" color="#ee8080"/></a>
                    <a href="mailto:kavin.mural42@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialBtn" icon={faEnvelope} size="3x" color="#ee8080"/></a>
                </div>
            </div>
            <div className="rightBox">
                <div className="aboutMeContainer">
                    <div className="aboutMeTitle">About Me</div>
                    <div className="aboutMeText"><span className="helloText">Hello!</span> Welcome to my personal website, my name is Argavin Muralitharan. 
                       I am currently studying Computer Science at the University of Waterloo, 
                       planning to specialize in Business. I have a strong passion for the field of 
                       computer science with a solid foundation in mathematics, program logic, and design. 
                       I am constantly seeking to expand my knowledge and am eager to learn more 
                       about the field and software development. I consider myself to be very competitive 
                       and can motivate myself and others to become the best versions of themselves. 
                       I hope to leave a great impression with every company I work with and build many 
                       relationships along the way!</div>
                </div>
                <div className="buttonContainer">
                    <Button text="Resume" link={Resume}></Button>
                </div>
            </div>
            
        </div>
    )
}
