import React, { Component } from 'react'
import Logo from '../../../../assets/logo.svg';
import Arrow from '../../../../assets/arrow-right.svg';
import {Link} from 'react-router-dom';
import './Thankyou.css';

class Thankyou extends Component { 
    constructor(props) {
        super(props);

      }

    render(){

        return (
                <div className="checkout-thankyou">
                    <div className="logo1">
                        <Link to="/">
                            <img src={Logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className="tab-links">
                        <div className="text-links mr-15">Information</div>
                        <div className="mr-15"> <img src={Arrow} alt="Arrow"></img></div>
                        <div className="text-links mr-15">Payment</div>
                        <div className="mr-15"> <img src={Arrow} alt="Arrow"></img></div>
                        <div className="text-links mr-15 tab-link-active">Confirm</div>
                    </div>
                   <div>
                        <h2>Thank you for your order!</h2>
                        <p>The order will be processed within next 48 hours.</p>
                   </div>
                </div>
        )

    }
}

export default Thankyou;
