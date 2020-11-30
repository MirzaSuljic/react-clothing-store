import React from 'react';
import {Link} from 'react-router-dom';
import ShopMen from '../../assets/shopMens.jpg';
import ShopWomen from '../../assets/shopWomens.jpg';
import './Directory.css';

const Directory = (props) => {
    return (
        <div className="directory">
            <Link to="/women">
                <div
                className="item"
                style={{
                    backgroundImage:`url(${ShopWomen})`
                }}>
            
                </div>
            </Link>
            <Link to="/men">
                <div
                className="item"
                style={{
                    backgroundImage:`url(${ShopMen})`
                }}>
                </div>
            </Link>
        </div>
    )
};

export default Directory;
