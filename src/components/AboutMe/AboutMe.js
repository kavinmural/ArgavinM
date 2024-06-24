import './AboutMe.css';
import Kav from './../../data/images/Kav.jpeg';
import Button from '../Common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Resume from './../../data/ArgavinM2022.pdf';


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
                    <div className="aboutMeText"><span className="helloText">Hello!</span> Welcome to my personal website! My name is Argavin Muralitharan, 
                       a dedicated professional with over 3 years of experience in software development. 
                       I graduated with a degree in Computer Science from the University of Waterloo in July 2022 and have since been honing my skills at UKG,
                       where I've spent 2 years contributing to various projects and gaining valuable industry insights. <br>
                       My journey in computer science has equipped me with a strong foundation in mathematics, program logic, and design principles. 
                       I thrive on continuous learning and am passionate about exploring new technologies and methodologies in software development. 
                       Throughout my career, I've demonstrated a proactive approach to problem-solving and a drive to deliver high-quality solutions. <br>
                       As a competitive individual, I not only challenge myself to excel but also inspire others to reach their full potential. 
                       I believe in leaving a lasting impression with every organization I collaborate with and strive to build meaningful relationships along the way. <br>
                       I look forward to connecting with you and exploring opportunities where I can contribute my skills and enthusiasm to achieve mutual success.
                    </div>
                </div>
                <div className="buttonContainer">
                    <Button text="Resume" link={Resume}></Button>
                </div>
            </div>
            
        </div>
    )
}
