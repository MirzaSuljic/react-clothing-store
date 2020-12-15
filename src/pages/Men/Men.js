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
            <span className="title-m">Men</span>
            <section className="just-a-flexbox">
                    {this.props.apiData.api.filter(data => data.gender === 'm').map(men => {
                        return (
                            <div className="men" key={men.id}>
                                <Link to={`/detail/${men.id}`}>
                                {/* <div className="item-men"> */}
                                        <img className="img-men" src={men.images[0]} alt="" />
                                <p>{men.title}</p>
                                <p className="price">{men.price !== men.discountedPrice && <span className="discounted-price">${men.discountedPrice}</span>}<span className={men.price !== men.discountedPrice ? 'striketrough' : ''}>${men.price}</span></p>
                        
                                {/* </div> */}
                            </Link>
                        </div>
                        );
                    })}
            </section>
        </div>



        )
    }
}
export default Men;
