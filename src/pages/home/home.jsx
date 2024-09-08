import {Link} from 'react-router-dom'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import data from '../../assets/data.json'
import './home.css';

const Home = () => {

    return (
        <main>
            <Banner />

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