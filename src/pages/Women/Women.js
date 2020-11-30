import React, { Component } from 'react';
import './Women.css';
import ShopWomen from '../../assets/shopWomens.jpg';

class Women extends Component {
    
    galery={
        images:[],
        description: '',
        price: '',
    }

    render(){
        return (
            <div> 
                <span className="title">Women</span>
            <div className="directory">
           
            <div
                className="item"
                style={{
                    backgroundImage:`url(${ShopWomen})`
                }}>
            </div>
            <div
                className="item"
                style={{
                    backgroundImage:`url(${ShopWomen})`
                }}>
            </div>
            <div
                className="item"
                style={{
                    backgroundImage:`url(${ShopWomen})`
                }}>
            </div>
            <div
                className="item"
                style={{
                    backgroundImage:`url(${ShopWomen})`
                }}>
            </div>
            </div>
        </div>
        )
    }
}

export default Women;
