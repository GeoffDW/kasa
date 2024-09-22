import { useParams } from 'react-router-dom';
import data from "../../assets/data.json";
import Collapse from "../../components/collapse/collapse";
import Error from "../../pages/error/error";
import HostInfo from '../../components/hostinfo/hostinfo';
import Tags from '../../components/tags/tags';
import Slideshow from '../../components/slideshow/slideshow';
import Rating from '../../components/rating/rating';

import "./housing.css";


function Housing() {
    const { id } = useParams();
    const card = data.housing.find((card) => card.id === id);

    if (!card) {
        return <Error />
    }; 

    return (
        <main id='housing'>
            <Slideshow images={card.pictures} />

            <section className="infos-card">

                <section className="titles-tags">
                    <h1>{card.title}</h1>
                    <h2>{card.location}</h2>
                    <Tags host={card.host} tags={card.tags} location={card.location} />
                </section>

                <section className="rating-host">
                    <Rating rating={card.rating} />
                    <HostInfo name={card.host.name} picture={card.host.picture} />
                </section>
            </section>

            <ul className="collapse-container">
                <Collapse title="Description" content={card.description} />
                <Collapse title="Equipements" content={<ul>{card.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>} />
            </ul>
        </main>
    );
}

export default Housing;