import React, { Component } from 'react'
import Logo from '../../assets/logo.svg';
import './Checkout.css';
import Information from './views/Information/Information';
import Payment from './views/Payment/Payment';
import Confirm from './views/Confirm/Confirm';
import Thankyou from './views/Thankyou/Thankyou';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'information',
            paymentProvider: '',
            cartItems: JSON.parse(localStorage.getItem('cart')) || [],
            tax: 81,
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

          this.goToNextStep = this.goToNextStep.bind(this);
          this.getInformation = this.getInformation.bind(this);
          this.getPaymentProvider = this.getPaymentProvider.bind(this);
      }

      getCurrentView() {
          let view;
          switch (this.state.currentView) {
              case 'information':
                    view = <Information goToNextStep={this.goToNextStep} getInformation={this.getInformation} />
                    break;
                case 'payment':
                    view = <Payment goToNextStep={this.goToNextStep} getPaymentProvider={this.getPaymentProvider} />
                    break;
                case 'confirm':
                    view = <Confirm goToNextStep={this.goToNextStep} info={this.state} />
                    break;
                case 'thankyou':
                    view = <Thankyou />
                    break;
                default:
          }

          return view;
      }

      getPaymentProvider(provider) {
          this.setState({
              paymentProvider: provider
          });
      }

      getInformation(info) {
          this.setState({
              email: info.email,
              firstName: info.firstName,
                lastName: info.lastName,
                company : info.company,
                address : info.address,
                apartment : info.apartment,
                postalCode : info.postalCode,
                city : info.city,
                country : info.country,
                phone : info.phone,
          });
      }

      goToNextStep(nextStep) {
        this.setState({
            currentView: nextStep
        })
      }

    render(){
        const subtotal = this.state.cartItems.reduce((total, item) => total += item.price * item.quantity,  0);
        const currentView = this.getCurrentView();
        return (
            <div className="checkout">
                <div className="checkout-views">{currentView}</div>
                <div className="checkout-cart-info">
                    <h2>Cart</h2>
                    <ul className="cart-items">
                        {this.state.cartItems.map((item, i) => {
                            return (
                                <li key={i}>
                                    <div className="cart-item-image" style={{backgroundImage: `url(${item.images[0]})`}}></div>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>${item.price} x {item.quantity}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="checkout-totals">
                        <div>
                            <div>Subtotal</div>
                            <div>${subtotal}</div>
                        </div>
                        <div>
                            <div>Taxes</div>
                            <div>${this.state.tax}</div>
                        </div>
                    </div>
                    <div className="checkout-total">
                        <div>Total</div>
                        <div>${subtotal + this.state.tax}</div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Checkout;
