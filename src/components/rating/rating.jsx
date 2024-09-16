import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating.css';

function Rating({ rating }) {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starIcons.push(<FontAwesomeIcon icon={faStar} className='color-stars' key={i} />);
        } else {
            starIcons.push(<FontAwesomeIcon icon={faStar} className='gray-stars' key={i} />);
        }
    }

    return (
        <figure className='rating'>
            {starIcons}
        </figure>
    );
};

export default Rating;