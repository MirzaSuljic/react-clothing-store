import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Details.css';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: this.props.apiData.api,
            details: this.props.apiData.api.find(data => data.id === this.props.match.match.params.id),
            currentPreviewImage: 0
        };

        this.selectPreviewImage = this.selectPreviewImage.bind(this);
        this.addToCart = this.addToCart.bind(this);
      }

      selectPreviewImage(index) {
          this.setState({
              currentPreviewImage: index
          });
      }

      addToCart() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartIndex = cartItems.findIndex(item => item.id === this.state.details.id);
        if (cartIndex === -1) {
            cartItems.push({
                ...this.state.details,
                quantity: 1
            });
            this.props.updateCartItemsLength(cartItems.length);
        } else {
            cartItems[cartIndex].quantity++;
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
      }

    render(){
        const details = this.state.details;
        return (
            <div className="details">
                <div className="details-main-section">
                    <div className="image-preview-section">
                        <div className="big-image" style={{backgroundImage: `url(${details.images[this.state.currentPreviewImage]})`}}>
                            
                        </div>
                        <div className="small-images">
                            {details.images.map((image, i) => {
                                return (
                                    <div key={i} className={this.state.currentPreviewImage === i ? 'selected-preview-image' : ''} onClick={() => { this.selectPreviewImage(i) }}>
                                        <img src={image}  alt=""/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="image-info-section">
                        <h1>{details.title}</h1>
                        <p>${details.price}</p>
                        <p>{details.description}</p>
                        <button className="view-button-details" onClick={this.addToCart}>Add to Cart</button>
                        <p>{details.description}</p>
                    </div>
                </div>
                <div className="details-bottom-section">
                    <div><h2>You might also like</h2></div>
                    {this.state.api.filter(item => item.gender === details.gender && item.id !== details.id).map((women, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/detail/${women.id}`}>
                                <div>
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

export default Details;
