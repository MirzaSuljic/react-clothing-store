import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Women.css';

class Women extends Component {
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
                <span className="title">Women</span>
            <div className="women">
           {this.props.apiData.api.map(women => {
               return (
                   <div key={women.id}>
                       <Link to={`/detail/${women.id}`}>
                    <div
                        className="item-women">
                            <img src={women.images[0]} alt="" />
                <h3>{women.title}</h3>
                <p>{women.price !== women.discountedPrice && <span className="discounted-price">${women.discountedPrice}</span>}<span className={women.price !== women.discountedPrice ? 'striketrough' : ''}>${women.price}</span></p>
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

export default Women;
