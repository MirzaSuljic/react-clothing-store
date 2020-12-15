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
            <span className="title-w">Women</span>
            <section className="just-a-flexbox">
                    {this.props.apiData.api.filter(data => data.gender === 'w').map(women => {
                        return (
                            <div className="women" key={women.id}>
                                <Link to={`/detail/${women.id}`}>
                                {/* <div className="item-women"> */}
                                        <img className="img-women" src={women.images[0]} alt="" />
                                <p className="p_title">{women.title}</p>
                                <p className="price">{women.price !== women.discountedPrice && <span className="discounted-price">${women.discountedPrice}</span>}<span className={women.price !== women.discountedPrice ? 'striketrough' : ''}>${women.price}</span></p>
                        
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

export default Women;
