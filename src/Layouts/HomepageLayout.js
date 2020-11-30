import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from './../components/Header/Header';

const HomepageLayout = (props) => {
    return (
        <div className="fullHeight">
            <Header/>
            {props.children}
            
        </div>
    )
}

export default HomepageLayout;
