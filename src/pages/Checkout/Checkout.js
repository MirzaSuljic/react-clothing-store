import React, { Component } from 'react'
import Logo from '../../assets/logo.svg';
import Arrow from '../../assets/arrow-right.svg';
import {Link} from 'react-router-dom';
import './Checkout.css';

class Checkout extends Component {
    state = {
      email: '',
      firstName: '',
      lastName: '',
      company : '',
      address : '',
      apartment : '',
      postalCode : '',
      city : '',
      country : '',
      phone : '',
      };

      addSubmit =()=>{
          
      }
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
                    <form onSubmit={this.addSubmit}>
                        <div className="input-container">
                            <div>
                                <label for="email" >Contact Information</label>
                            </div>
                            <div>
                                <input type="email" className="form-control " email="email"  placeholder="Enter email address"  />
                            </div>
                        </div>
                        <div>
                            <label for="shippingAddress">Shipping address</label>
                        </div>
                        <div className="inner-container">
                            <div className="left-side ">
                                <input type="text" className="form-control" firstName="firstName"  placeholder="First Name" />
                            </div>
                            <div class="right-side ">
                                <input type="text " className="form-control " firstName="lastName"  placeholder="Last Name " />
                            </div>
                        </div>
                        <div className="input-container">
                            <input type="text" class="form-control " company="company"  placeholder="Company"/>
                        </div>
                        <div className="input-container">
                            <input type="text" class="form-control " address="address"  placeholder="Address" />
                        
                        </div>
                        <div className="input-container">
                            <input type="text" class="form-control " apartment="apartment"  placeholder="Appartment"  />
                        </div>
                        <div className="inner-container">
                            <div className="left-side ">
                                <input type="text" className="form-control" postalCode="postalCode"  placeholder="Postal Code" />
                            </div>
                            <div class="right-side ">
                                <input type="text " className="form-control" city="city"  placeholder="City " />
                            </div>
                        </div>
                        <div className="input-container">
                            <input type="text" class="form-control " country="country"  placeholder="Country" />
                        </div>
                        <div className="input-container">
                            <input type="text" class="form-control " phone="phone" placeholder="Phone" />
                        </div>
                        </form>

                        <button type="submit">Submit</button>
                    </section>
                
            </div>
        )

    }
}

export default Checkout;
