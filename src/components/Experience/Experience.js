import './Experience.css';
import UKG from '../../data/images/UKG.png';
import TTC from '../../data/images/TTC.png';
import CognisantMD from '../../data/images/CognisantMD.png';

export default function Experience() {
    return (
        <div className="experience" id="experience">
            <div className="imageContainer">
                <img className="TTC" src={TTC} alt="TTC"></img>
                <img className="UKG" src={UKG} alt="UKG"></img>
                <img className="CognisantMD" src={CognisantMD} alt="CognisantMD"></img>
            </div>
        </div>
    )
}
