import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Men.css';

class Men extends Component {
    constructor(props) {
        super(props);
    } 
    
    galery={
        images:[],
        description: '',
        price: '',
    }

    render(){
        return (
            <div> 
                <span className="title">Men</span>
            <div className="men">
           {this.props.apiData.men.map(men => {
               return (
                   <div key={men.id}>
                       <Link to={`/detail/${men.id}`}>
                    <div
                        className="item-men">
                            <img src={men.images[0]} alt="" />
                <h3>{men.title}</h3>
                <p>{men.price !== men.discountedPrice && <span className="discounted-price">${men.discountedPrice}</span>}<span className={men.price !== men.discountedPrice ? 'striketrough' : ''}>${men.price}</span></p>
                    </div>
                   </Link>
                   </div>
               );
           })}
            </div>
        </div>
        )
    }
}

export default Men;
