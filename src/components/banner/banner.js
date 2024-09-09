import './banner.css';

function Banner({ url, info, content='' }) {
    return (
        <header className='banner'>
            <img src={url} alt={info} />
            {content && <h1> {content} </h1>}
        </header>
    )
}

export default Banner