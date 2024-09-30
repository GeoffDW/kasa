import React, { useState } from 'react';
import './collapse.css';
import Arrow from '../../assets/images/arrow_left.png';

/**

Composant de collapse pour la page À propos.
@param {string} titre - Titre de la section collapsible
@param {string} [contenu=''] - Contenu de la section collapsible
@returns {ReactElement} Un élément React pour la section collapse
*/
function Collapse({ title, content = '' }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (

        <li>
            <button onClick={toggleCollapse} className="collapse-button">
                <img src={Arrow} alt="Toggle" style={{ transform: `rotate(${isCollapsed ? 0 : 180}deg)`, transition: 'transform 0.3s ease' }} />{title}
            </button>
            {isCollapsed ? null : <div
                className="content-expanded"
            >{content}</div>}
        </li>

    );
};

export default Collapse;