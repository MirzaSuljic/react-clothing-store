import React, { Component } from 'react'
import Logo from '../../../../assets/logo.svg';
import PayPal from '../../../../assets/paypal.svg';
import Pay from '../../../../assets/pay.svg';
import Stripe from '../../../../assets/stripe.svg';
import Klarna from '../../../../assets/klarna.svg';
import Arrow from '../../../../assets/arrow-right.svg';
import {Link} from 'react-router-dom';
import './Payment.css';

class Payment extends Component { 
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
          this.props.goToNextStep('confirm');
          this.props.getPaymentProvider(this.state.selectedProvider);
      }

    render(){
        return (
                <div className="checkout-select-payment">
                    <div className="logo1">
                        <Link to="/">
                            <img src={Logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className="tab-links">
                        <div className="text-links mr-15">Information</div>
                        <div className="mr-15"> <img className="img" src={Arrow} alt="Arrow"></img></div>
                        <div className="text-links mr-15 tab-link-active">Payment</div>
                        <div className="mr-15"> <img className="img" src={Arrow} alt="Arrow"></img></div>
                        <div className="text-links mr-15">Confirm</div>
                    </div>
                    <h1>Payment provider</h1>
                    <div className="payment-providers">
                        <div className={this.state.selectedProvider === 'paypal' ? 'payment-selected' : ''} onClick={() => { this.selectProvider('paypal') }}>
                            <img src={PayPal} alt="PayPal"></img>
                        </div>
                        <div className={this.state.selectedProvider === 'stripe' ? 'payment-selected' : ''} onClick={() => { this.selectProvider('stripe') }}>
                            <img src={Stripe} alt="Stripe"></img>
                        </div>
                        <div className={this.state.selectedProvider === 'apple-pay' ? 'payment-selected' : ''} onClick={() => { this.selectProvider('apple-pay') }}>
                            <img src={Pay} alt="ApplePay"></img>
                        </div>
                        <div className={this.state.selectedProvider === 'klarna' ? 'payment-selected' : ''} onClick={() => { this.selectProvider('paklarnaypal') }}>
                            <img src={Klarna} alt="Klarna"></img>
                        </div>
                    </div>
                    <button className="view-button" type="button" onClick={this.goToNextStep}>Continue to Confirm</button>
                </div>
        )

    }
}

export default Payment;
