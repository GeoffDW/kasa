import logo from '../../assets/images/logo.png';
import './nav.css';

function Nav() {
    return (
        <div className='kasa-nav'>
            <img src={logo} className="kasa-logo" alt="logo Kasa" />
            <nav>
                <a>Accueil</a>
                <a>À propos</a>
            </nav>
        </div>
    );
}

export default Nav