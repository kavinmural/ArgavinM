import './Experience.css';
import UKG from '../../data/images/UKG.png';
import TTC from '../../data/images/TTC.png';
import CognisantMD from '../../data/images/CognisantMD.png';

export default function Experience() {
    return (
        <div className="experience" id="experience">
            <h1 className="experienceTitle">Experience</h1>
            <div className="imageContainer">
                <a href="https://www.ttc.ca/" target="_blank"><img className="TTC" src={TTC} alt="TTC"></img></a>
                <a href="https://www.ukg.com/" target="_blank"><img className="UKG" src={UKG} alt="UKG"></img></a>
                <a href="https://www.cognisantmd.com/" target="_blank"><img className="CognisantMD" src={CognisantMD} alt="CognisantMD"></img></a>
            </div>
        </div>
    )
}
