import React, { Component } from 'react'
import Logo from '../../assets/logo.svg';
import Arrow from '../../assets/arrow-right.svg';
import {Link} from 'react-router-dom';
import './Checkout.css';

class Checkout extends Component {
    render(){
        return (
            <div className="checkout">
                <div className="logo1">
                    <Link to="/">
                        <img src={Logo} alt="logo"></img>
                    </Link>
                </div>
                <div className="tab-links">
                    <Link to="/">
                        <div className="text-links mr-15">Information</div>
                    </Link>
                        <div className="mr-15"> <img src={Arrow} alt="Arrow"></img></div>
                    <Link to="/">
                        <div className="text-links mr-15">Payment</div>
                    </Link>
                    <div className="mr-15"> <img src={Arrow} alt="Arrow"></img></div>
                    <Link to="/">
                        <div className="text-links mr-15">Confirm</div>
                    </Link>
                </div>
                <section className="form-container">
                    <form>
                        <div className="input-container">
                            <div>
                                <label for="email" >Contact Information</label>
                            </div>
                            <div>
                                <input type="email" class="form-control " id="email " placeholder="Enter email address"  />
                            </div>
                        </div>
                        <div>
                            <label for="personalNumber">Shipping address</label>
                        </div>
                        <div className="inner-container">
                            <div className="left-side ">
                                <input type="email" className="form-control" id="email" placeholder="Enter personal number" />
                            </div>
                            <div class="right-side ">
                                <input type="text " className="form-control " id="employeeNumber " placeholder="Enter employee number " />
                            </div>
                        </div>
                        <div className="input-container">
                            <input type="email" class="form-control " id="email " placeholder="Enter email address"/>
                        </div>
                        <div className="input-container">
                            <input type="email" class="form-control " id="email " placeholder="Enter email address" />
                        
                        </div>
                        <div className="input-container">
                            <input type="email" class="form-control " id="email " placeholder="Enter email address"  />
                        </div>
                        <div className="inner-container">
                            <div className="left-side ">
                                <input type="email" className="form-control" id="email" placeholder="Enter personal number" />
                            </div>
                            <div class="right-side ">
                                <input type="text " className="form-control " id="employeeNumber " placeholder="Enter employee number " />
                            </div>
                        </div>
                        <div className="input-container">
                            <input type="email" class="form-control " id="email " placeholder="Enter email address" />
                        </div>
                        <div className="input-container">
                            <input type="email" class="form-control " id="email " placeholder="Enter email address" />
                        </div>
                       
                        </form>
                    </section>
                {/* <div className="contacts">
                    <form id="contact-form">
                        <div>
                            <label>Contact Information</label>
                        </div>
                        <div>
                            <input 
                            type="email"id="email"
                            // value={this.state.email}
                            placeholder="Email" 
                            className="form-control"
                            required 
                            />
                        </div>
                    </form>
                </div> */}
                
            </div>
        )

    }
}

export default Checkout;
