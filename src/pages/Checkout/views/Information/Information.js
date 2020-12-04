import React, { Component } from 'react'
import Logo from '../../../../assets/logo.svg';
import Arrow from '../../../../assets/arrow-right.svg';
import {Link} from 'react-router-dom';
import './Information.css';

class Information extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
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
        }

        this.goToNextStep = this.goToNextStep.bind(this);
      }

    goToNextStep =(e)=>{
        e.preventDefault();
        this.setState({
            submitted: true,
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            company : e.target.company.value,
            address : e.target.address.value,
            apartment : e.target.apartment.value,
            postalCode : e.target.postalCode.value,
            city : e.target.city.value,
            country : e.target.country.value,
            phone : e.target.phone.value
        });

        if (e.target.email.value === '' ||
            e.target.firstName.value === '' ||
            e.target.lastName.value === '' ||
            e.target.company.value === '' ||
            e.target.address.value === '' ||
            e.target.apartment.value === '' ||
            e.target.postalCode.value === '' ||
            e.target.city.value === '' ||
            e.target.country.value === '' ||
            e.target.phone.value === '') return;

        this.props.goToNextStep('payment');
        this.props.getInformation({
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            company : e.target.company.value,
            address : e.target.address.value,
            apartment : e.target.apartment.value,
            postalCode : e.target.postalCode.value,
            city : e.target.city.value,
            country : e.target.country.value,
            phone : e.target.phone.value
        });
    }

    render(){
        const submitted = this.state.submitted;
        return (
                <div className="checkout-form">
                    <div className="logo1">
                        <Link to="/">
                            <img src={Logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className="tab-links">
                        <div className="text-links mr-15 tab-link-active">Information</div>
                        <div className="mr-15"> <img src={Arrow} alt="Arrow"></img></div>
                        <div className="text-links mr-15">Payment</div>
                        <div className="mr-15"> <img src={Arrow} alt="Arrow"></img></div>
                        <div className="text-links mr-15">Confirm</div>
                    </div>
                    <section className="form-container">
                        <form onSubmit={this.goToNextStep}>
                            <div className="input-container">
                                <div>
                                    <h2>Contact Information</h2>
                                </div>
                                <div>
                                    <input type="email" className={submitted && this.state.email === '' ? 'is-invalid' : ''} name="email"  placeholder="Enter email address"  />
                                </div>
                            </div>
                            <div>
                                <h2>Shipping address</h2>
                            </div>
                            <div className="inner-container">
                                <div className="left-side ">
                                    <input type="text" className={submitted && this.state.firstName === '' ? 'is-invalid' : ''} name="firstName"  placeholder="First Name" />
                                </div>
                                <div className="right-side ">
                                    <input type="text " className={submitted && this.state.lastName === '' ? 'is-invalid' : ''} name="lastName"  placeholder="Last Name " />
                                </div>
                            </div>
                            <div className="input-container">
                                <input type="text" className={submitted && this.state.company === '' ? 'is-invalid' : ''} name="company"  placeholder="Company"/>
                            </div>
                            <div className="input-container">
                                <input type="text" className={submitted && this.state.address === '' ? 'is-invalid' : ''} name="address"  placeholder="Address" />
                            
                            </div>
                            <div className="input-container">
                                <input type="text" className={submitted && this.state.apartment === '' ? 'is-invalid' : ''} name="apartment"  placeholder="Appartment"  />
                            </div>
                            <div className="inner-container">
                                <div className="left-side ">
                                    <input type="text" className={submitted && this.state.postalCode === '' ? 'is-invalid' : ''} name="postalCode"  placeholder="Postal Code" />
                                </div>
                                <div className="right-side ">
                                    <input type="text " className={submitted && this.state.city === '' ? 'is-invalid' : ''} name="city"  placeholder="City " />
                                </div>
                            </div>
                            <div className="input-container">
                                <input type="text" className={submitted && this.state.country === '' ? 'is-invalid' : ''} name="country"  placeholder="Country" />
                            </div>
                            <div className="input-container">
                                <input type="text" className={submitted && this.state.phone === '' ? 'is-invalid' : ''} name="phone" placeholder="Phone" />
                            </div>
                            <button className="view-button" type="submit">Continue to Payment</button>
                        </form>

                    </section>
                </div>
        )

    }
}

export default Information;
