import './NavDisplay.css';

export default function NavDisplay({navOpen, setNavOpen}) {
    return (
        <div className={"navDisplay " + (navOpen && "active")}>
            <ul>
                <li>
                    <a href="#landing" onClick={() => setNavOpen(!navOpen)}><span className="pink">.</span>Home<span className="pink">()</span></a>
                </li>
                <li>
                    <a href="#aboutme" onClick={() => setNavOpen(!navOpen)}><span className="pink">.</span>About<span className="pink">()</span></a>
                </li>
                <li>
                    <a href="#projects" onClick={() => setNavOpen(!navOpen)}><span className="pink">.</span>Projects<span className="pink">()</span></a>
                </li>
                <li>
                    <a href="#experience" onClick={() => setNavOpen(!navOpen)}><span className="pink">.</span>Experience<span className="pink">()</span></a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setNavOpen(!navOpen)}><span className="pink">.</span>Contact<span className="pink">()</span></a>
                </li>
            </ul>
        </div>
    )
}
