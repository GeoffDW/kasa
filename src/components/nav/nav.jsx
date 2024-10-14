import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import './nav.css';

function Nav() {
    return (
        <nav className='kasa-nav'>
            <img src={logo} className="kasa-logo" alt="logo Kasa" />

            <ul className='links'>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A Propos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav