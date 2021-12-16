import './Contact.css';
import Button from '../Common/Button/Button';
import Footer from './Footer/Footer';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particles-config';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <Particles id="particles-js" params={particlesConfig}></Particles>
            <h1 className="title">Get In Touch!</h1>
            <div className="subText">
                I'm currently looking for a full-time position!<br></br>
                Don't hesitate to contact me for job oppertunities or other cool projects!<br></br>
                My Inbox is always open, and I'll try to get back to you ASAP!
            </div>
            <div className="contactBtnContainer">
                <Button text="Contact" link="mailto:kavin.mural42@gmail.com"></Button>
            </div>
            <Footer></Footer>
        </div>
    )
}
