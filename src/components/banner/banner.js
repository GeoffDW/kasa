import banner from '../../assets/images/banner.png';
import './banner.css';

function Banner() {
    return (
        <header className='banner'>
            <img src={banner} alt='Bannière kasa' />
            <h1> Chez vous, partout et ailleurs </h1>
        </header>
    )
}

export default Banner