import './NavBar.css';
import Logo from '../../data/images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar({navOpen, setNavOpen}) {
    return (
        <div className={"navBar " + (navOpen && "active")}>
            <div className="wrapper">
                <div className="logoBox">
                    <a className="logo" href="#landing">
                        <img className="logo" src={Logo} alt="Logo"></img>
                    </a>
                </div>
                <div className="menuBox">
                    <MenuIcon className="menu" fontSize="large" onClick={() => setNavOpen(!navOpen)}/>
                </div>
            </div>
        </div>
    )
}