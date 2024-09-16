import React from 'react';
import mountainForests from '../../assets/images/mountain-forests.png';
import './about.css';
import Collapse from '../../components/collapse/collapse';
import data from '../../assets/data.json';
import Banner from '../../components/banner/banner';

const About = () => {
    return (
        <main>
            <Banner url={mountainForests} info='Forêt montagneuse' />
            <ul className='about-collapse'>
                {data.collapse.map((about, index) => (
                    <Collapse key={index} title={about.title} content={about.content} />
                )
                )}
            </ul>
        </main>
    )
}

export default About;