import React from 'react';
import './tags.css';

function PropertyDetails({ tags, location }) {

    return (
        <ul className="property-details">
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    );
};

export default PropertyDetails;