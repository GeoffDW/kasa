import './card.css';

function Card({ src, alt, }) {
    return (

        <figure className='card'>
            <img src={src} alt={alt} />
            <figcaption>Titre de la location</figcaption>
        </figure>

    );
};

export default Card;