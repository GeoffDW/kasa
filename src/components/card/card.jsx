import './card.css';

function Card({ cover, title }) {
    return (

        <figure className='card shadow'>
            <img src={cover} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>

    );
};

export default Card