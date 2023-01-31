import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav className="c-header-nav">
                <ul>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/digital-clock" className="link">Digital Clock</Link>
                    <Link to="/countdown" className="link">Countdown</Link>
                    <Link to="/stopwatch" className="link">Stopwatch</Link>
                </ul>
            </nav>
        </header>
    );
}