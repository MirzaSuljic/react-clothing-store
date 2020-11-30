import React from 'react';
import './Homepage.css';
import Directory from '../../components/Directory/Directory';
import Women from '../Women/Women';
import Men from '../Men/Men';

const Homepage = () => {
    return (
        <section className="homepage">
            <Directory/>
            <Women/>
            <Men/>
        </section>
    )
};

export default Homepage;
