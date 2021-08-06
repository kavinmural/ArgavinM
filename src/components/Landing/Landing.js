import './Landing.css';
import particlesConfig from '../../config/particles-config';
import Particles from 'react-particles-js';
import Typical from 'react-typical';


export default function Landing() {
    return (
        <div className="landing" id="landing">
            <Particles id="particles-js" params={particlesConfig}></Particles>
            <div className="nameBox">
                <h2 className="name">Argavin <br></br> Mura<span className="subName">lit</span>haran</h2>
                <div className="typeBox">
                    <Typical loop={Infinity} steps={['Software Engineer', 1000, 'Computer Science', 1000 , 'UX/UI Design', 1000]}/>
                </div>
                <div className="arrow"></div>
                <span className="arrowText">Scroll Down</span>
            </div>
        </div>
    )
}
