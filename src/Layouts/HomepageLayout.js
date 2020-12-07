import React, { Component } from 'react';
import Header from './../components/Header/Header';

class HomepageLayout extends Component {
  
    render () {
        return (
            <div className="fullHeight">
                    <Header cartItemsLength={this.props.cartItemsLength}/>
                    {this.props.children}
                
            </div>
        );
    }
}

export default HomepageLayout;



