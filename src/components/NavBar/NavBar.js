import './NavBar.css';
import Logo from './../../data/images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function NavBar({navOpen, setNavOpen}) {
    return (
        <div className={"navBar " + (navOpen && "active")}>
            <div className="wrapper">
                <div className="logoBox">
                    <a className="logo" href="#landing">
                        <img className="logo" src={Logo} alt="Logo" rel="preload"></img>
                    </a>
                </div>
                <div className="menuBox">
                    <MenuIcon className={"menu " + (navOpen && "active")} fontSize="large" onClick={() => setNavOpen(!navOpen)}/>
                    <CloseIcon className={"close " + (navOpen && "active")} fontSize="large" onClick={() => setNavOpen(!navOpen)}/>
                </div>
            </div>
        </div>
    )
}