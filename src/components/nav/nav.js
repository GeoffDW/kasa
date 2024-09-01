import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import './nav.css';

function Nav() {
    return (
        <div className='kasa-nav'>
            <img src={logo} className="kasa-logo" alt="logo Kasa" />
            <nav className='links'>
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">À Propos</Link>
            </nav>
        </div>
    );
}

export default Nav