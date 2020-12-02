import React, { Component } from 'react'
import Logo from '../../../../assets/logo.svg';
import Arrow from '../../../../assets/arrow-right.svg';
import {Link} from 'react-router-dom';
import './Confirm.css';

class Confirm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            selectedProvider: 'paypal'
        }

        this.selectProvider = this.selectProvider.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
      }

      selectProvider(provider) {
          this.setState({
            selectedProvider: provider
          });
      }

      goToNextStep() {
          this.props.goToNextStep('thankyou');
      }

      formatPaymentProvider(provider) {
        let paymentProvider;

        switch (provider) {
            case 'paypal':
                paymentProvider = 'PayPal'
                break;
            case 'stripe':
                paymentProvider = 'Stripe'
                break;
            case 'apple-pay':
                paymentProvider = 'Apple Pay'
                break;
            case 'klarna':
                paymentProvider = 'klarna'
                break;
            default:
                break;
        }

        return paymentProvider;
      }

    render(){
        const info = this.props.info;

        return (
                <div className="checkout-confirm">
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
                   <div className="checkout-info">
                       <h2>Confirm</h2>
                        <p>{info.email}</p>
                        <p className="mt bold">{info.firstName} {info.lastName}</p>
                        <p>{info.address}</p>
                        <p>{info.zip} {info.city}</p>
                        <p>{info.country}</p>
                        <p className="mt">{info.phone}</p>
                        <p className="mt">{this.formatPaymentProvider(info.paymentProvider)} ({info.email})</p>
                   </div>
                    <button className="view-button" type="button" onClick={this.goToNextStep}>Order</button>
                </div>
        )

    }
}

export default Confirm;
