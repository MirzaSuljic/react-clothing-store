import React from 'react';
import Header from './../components/Header/Header';

const MainLayout = (props) => {
    return (
        <div>
            <Header cartItemsLength={props.cartItemsLength}/>
            <div className="main">
                {props.children}
            </div>
            
        </div>
    )
}

export default MainLayout;
