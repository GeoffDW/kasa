import {Link} from 'react-router-dom'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import data from '../../assets/data.json'
import image from '../../assets/images/falaises.png'
import './home.css';

const Home = () => {

    return (
        <main>
            <Banner url={image} info='falaise en bord de mer' content='Chez nous partout, et ailleurs' />

            <ul className='allcards'>
                {data.housing.map(({ id, cover, title }) => 
                <li key={id}>
                    <Link to={`/logement/${id}`}>
                        <Card cover={cover} title={title} />
                    </Link>
                </li>
                )}
            </ul>
        </main>
    )
} 

export default Home