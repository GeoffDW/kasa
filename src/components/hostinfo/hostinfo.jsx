import React from 'react';
import './hostinfo.css';

function HostInfo({ name, picture }) {
    const [firstName, lastName] = name.split(' ');
    
    return (
        <figure className='host-figure'>
            <figure className='host-name'>
                <figcaption>{firstName}</figcaption>
                <figcaption>{lastName}</figcaption>
            </figure>
            <img src={picture} alt={name} className='host-picture' />
        </figure>
    );
}

export default HostInfo;